const path = require('path');
const fs = require('fs');

const AT_NOTATION_KEYS = {
	short: 'Short',
	type: 'Type',
	descr: 'Descr',
	changelog: 'Changelog',
	signature: 'Signature',
	params: 'Params',
	returns: 'Returns',
	values: 'Values'
};

const COMPONENTS_PATH = '@site/src/components';

// let components = { Disqus: "Disqus" };
let components = {};
let metaDescription = '';

const wrapDataWithComponent = (data, componentName) => {
	return componentName ? `\n<${componentName}>\n${data}\n\n</${componentName}>\n\n` : data;
}

const onAtNotationMatch = (data, { key }) => {
	const componentName = AT_NOTATION_KEYS[key];
	if (componentName) {
		components[componentName] = componentName;
	}

	switch(key) {
		case 'default':
			return `<strong>Default value: </strong> ${data}`;
		case 'example':
			return `**Example**\n~~~js\n${data.replace(/^(?:\n*)([^]+?)(?:\n*)$/g, '$1')}\n~~~`;
		case 'metadescr':
			metaDescription = data.replace(/^(?:\n*)(.+)(?:\n|.)*/, '$1');
			return '';
		// TODO: remove later
		case 'relatedsample':
			return data;
		default:
			return componentName
				? wrapDataWithComponent(data, componentName)
				: data;
	}
};

const onAtNotationFunctionMatch = (data, { key, fullMatch, dir }) => {
	if (data.indexOf('.md') !== -1 || data.indexOf('.mdx') !== -1 || data.indexOf('.') === -1) {
		const result = readFileFromPath(dir, data);
		return result ? /@short: (.*)/g.exec(result)[1] : fullMatch;
	}
	return fullMatch;
}

const onBraceNotationMatch = (data, { key, fullMatch }) => {
	switch(key) {
		case 'note':
			return `:::note\n${data}\n:::`;
		case 'pronote':
			return `:::tip Pro version only\n${data}\n:::`;
		case 'editor':
			return data;
		default:
			return fullMatch;
	}
};

const readFile = (workingDir, filePath) => {
	workingDir = workingDir.replace(/\\/g, '/');
	filePath = filePath.replace(/\\/g, '/');
	let finalPath = workingDir + '/' + filePath;

	if (finalPath.indexOf('.') === -1) {
		finalPath += !fs.existsSync(finalPath + '.md') ? '.mdx' : '.md';
	}

	if (!fs.existsSync(finalPath)) {
		const clippedFilePath = filePath.split('/');
		clippedFilePath.shift();
		if (!clippedFilePath.length) {
			return false;
		}
		return readFile(workingDir, clippedFilePath.join('/'));
	}

	return fs.readFileSync(path.normalize(finalPath), 'utf8');
};

const getContentRelativePath = (dir, filePath) => {
	// Already a docs-root-relative path (no ./ or ../ prefix) — return as-is
	if (!filePath.startsWith('.')) {
		return filePath;
	}

	const absolutePath = path.resolve(dir, filePath).replace(/\\/g, '/');
	const i18nDir = path.join(__dirname, 'i18n').replace(/\\/g, '/');
	const docsDir = path.join(__dirname, 'docs').replace(/\\/g, '/');

	if (absolutePath.startsWith(i18nDir + '/')) {
		const currentIndex = absolutePath.indexOf('/current/');
		if (currentIndex !== -1) {
			return absolutePath.substring(currentIndex + '/current/'.length);
		}
	}

	if (absolutePath.startsWith(docsDir + '/')) {
		return absolutePath.substring(docsDir.length + 1);
	}

	return filePath;
};

// Returns the content root for i18n files (i18n/XX/.../current), or null for docs/ files.
const getLocaleContentRoot = (dir) => {
	const normalizedDir = dir.replace(/\\/g, '/');
	const currentIndex = normalizedDir.indexOf('/current/');
	if (currentIndex !== -1 && normalizedDir.includes('/i18n/')) {
		return normalizedDir.substring(0, currentIndex + '/current'.length);
	}
	return null;
};

// Reads a file by path, supporting both relative (../foo.md) and docs-root-relative (api/foo.md) formats.
// For i18n files, tries the localized version first before falling back to docs/.
const readFileFromPath = (dir, filePath) => {
	const result = readFile(dir, filePath);
	if (result) return result;

	// If path doesn't start with . it may be docs-root-relative
	if (!filePath.startsWith('.')) {
		// For i18n files: try the locale's content root first (localized version)
		const localeRoot = getLocaleContentRoot(dir);
		if (localeRoot) {
			const localeResult = readFile(localeRoot, filePath);
			if (localeResult) return localeResult;
		}

		// Fall back to docs/ (English)
		const docsDir = path.join(__dirname, 'docs').replace(/\\/g, '/');
		return readFile(docsDir, filePath);
	}

	return false;
};

const onEmptyLinkMatch = (data, { key, fullMatch, dir }) => {
	const filePath = fullMatch.substring(fullMatch.indexOf('(') + 1, fullMatch.length - 1);
	if (filePath.indexOf('.md') !== -1 || filePath.indexOf('.mdx') !== -1 || filePath.indexOf('.') === -1) {
		const fileData = readFileFromPath(dir, filePath);
		if (!fileData) return fullMatch;
		const label = /.*sidebar_label: (.+)/g.exec(fileData)[1];
		const normalizedPath = getContentRelativePath(dir, filePath);
		return `[${label}](${normalizedPath})`;
	}
	return fullMatch;
};

const onAfterDataTransformation = (data) => {
	const allAvailableComponents = Object.values(components);
	let transformedData = data;

	if (allAvailableComponents.length !== 0) {
		const imports = `import { ${allAvailableComponents.join(', ')} } from '${COMPONENTS_PATH}';\n\n`;
		const isTitles = /---((?:\r?\n|\r)|.)+?---/.test(transformedData);
		transformedData = isTitles
			? (transformedData.replace(/^(---((?:\s*\n)|.)+?---)/, `$1\n\n${imports}`))
			: imports + transformedData;
	}

	if (metaDescription) {
		transformedData = transformedData.replace(/^(---\s*\n)((?:\n|.)+?)(---\s*?\n*)/,  (fullMatch, groupA, groupB, groupC) => {
			const isDocusaurusDescriptionExist = /^description: *.*\n/m.test(fullMatch);
			if (!isDocusaurusDescriptionExist) {
				return `${groupA}description: ${metaDescription}\n${groupB}${groupC}`;
			}
			return fullMatch;
		});
	}

	// components = { Disqus: "Disqus" };
	metaDescription = '';

	return transformedData;
};

/* !!! */

/** @type {import('@docusaurus/types').Config} */
const config = {
    noIndex: false,
    title: 'DHTMLX RichText Documentation',
    tagline: 'DHTMLX RichText Documentation',
    url: 'https://docs.dhtmlx.com',
    baseUrl: '/richtext/',
    onBrokenLinks: 'warn',
    // onBrokenMarkdownLinks: 'warn', // deprecated in v3.9.1
    onBrokenAnchors: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'DHTMLX',
    projectName: 'docs-richtext',
    trailingSlash: true,
    markdown: {
		hooks: {
			onBrokenMarkdownLinks: 'warn',
		}
	},
    /*
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/DHTMLX/docs-richtext/edit/master/',
                    routeBasePath: '/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ],
    */
    scripts:[
		{
			src: 'https://dhtmlx.com/gtag/docs.js',
			async: true
		}
	],
	stylesheets: [
		{ href:'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.css' },
	],

    presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/DHTMLX/docs-richtext/edit/master/',
					routeBasePath: '/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				},
				sitemap: {
					changefreq: 'daily',
					priority: 0.5
				}
			})
		]
	],
    plugins:[
        'docusaurus-plugin-sass',
        [
            path.resolve(__dirname, './plugins/dhx-md-data-transformer-plugin'),
            {
                onBraceNotationMatch,
                onAtNotationMatch,
                onAtNotationFunctionMatch,
                onEmptyLinkMatch,
                onAfterDataTransformation
            }
        ]
    ],

    themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
	({
        image: 'img/og-default-richtext.png',
        metadata: [
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: 'DHTMLX RichText Docs' },
            { property: 'og:locale', content: 'en_US' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@dhtmlx' }
        ],
        algolia: {
            // This is a read-only, search-only key served directly by the front-end, managed by Algolia via their
            // free DocSearch program. The key is not sensitive. See https://docsearch.algolia.com/ for more details.
            appId: 'PJG180YLDH',
            apiKey: '83de34cb4df8e71e814b989e48259185',
            indexName: 'richtext',
            contextualSearch: true,
        },
        navbar: {
            title: 'JavaScript RichText Documentation',
            logo: {
                alt: 'DHTMLX RichText Documentation',
                src: 'img/dhtmlx_logo.svg',
                href: 'https://docs.dhtmlx.com/'
            },
            items: [
                {
                    label: 'Examples',
                    href: 'https://snippet.dhtmlx.com/t55alxiy?tag=richtext',
                    position: 'right'
                },
                {
                    label: 'Forum',
                    href: 'https://forum.dhtmlx.com/c/richtext/',
                    position: 'right'
                },
                {
                    label: 'Support',
                    href: 'https://dhtmlx.com/docs/technical-support.shtml',
                    position: 'right'
                },
                {
                    label: 'Download',
                    href: 'https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml',
                    position: 'right'
                }
            ]
        },
        footer: {
            "style": "dark",
			"links": [
                {
                    "title": "Development center",
					"items": [
                        {
                            label: 'Download RichText',
                            href: 'https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml',
                            position: 'right'
                        },
                        {
                            label: 'Examples',
                            href: 'https://snippet.dhtmlx.com/t55alxiy?tag=richtext',
                            position: 'right'
                        },
                        {
                            label: 'Blog',
                            href: 'https://dhtmlx.com/blog/tag/richtext/'
                        },
                        {
                            label: 'Forum',
                            href: 'https://forum.dhtmlx.com/c/richtext/',
                            position: 'right'
                        }
                    ]
                },
                {
                    "title": "Community",
					"items": [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/DHTMLX'
                        },
                        {
                            label: 'Youtube',
                            href: 'https://www.youtube.com/user/dhtmlx'
                        },
                        {
                            label: 'Facebook',
                            href: 'https://www.facebook.com/dhtmlx'
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/dhtmlx'
                        },
                        {
                            label: 'Linkedin',
                            href: 'https://www.linkedin.com/groups/3345009/'
                        }
                    ]
                },
                {
                    "title": "Company",
					"items": [
                        {
                            label: 'About us',
                            href: 'https://dhtmlx.com/docs/company.shtml'
                        },
                        {
                            label: 'Contact us',
                            href: 'https://dhtmlx.com/docs/contact.shtml'
                        },
                        {
                            label: 'Licensing',
                            href: 'https://dhtmlx.com/docs/products/dhtmlxRichText/#editions-licenses'
                        }
                    ]
                }
            ]
        }
    })
};

module.exports = config;
