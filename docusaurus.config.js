module.exports = {
    title: 'DHTMLX RichText Documentation',
    tagline: 'DHTMLX RichText Documentation',
    url: 'https://docs.dhtmlx.com/',
    baseUrl: '/richtext/',
    onBrokenLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'DHTMLX',
    projectName: 'docs-richtext',
    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: false,
            switchConfig: {
                darkIcon: '🌙',
                darkIconStyle: {
                    marginLeft: '0px',
                },
                lightIcon: '☀️',
                lightIconStyle: {
                    marginLeft: '0px',
                },
            },
        },
        algolia: {
            // This is a read-only, search-only key served directly by the front-end, managed by Algolia via their
            // free DocSearch program. The key is not sensitive. See https://docsearch.algolia.com/ for more details.
            apiKey: '421aa9b07cc441097c4db7f264b63a6b',
            indexName: 'richtext',

            // Optional: see doc section bellow
            contextualSearch: true,

            // Optional: Algolia search parameters
            searchParameters: {},

            //... other Algolia params
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
        },
        navbar: {
            title: 'RichText Documentation',
            logo: {
                alt: 'DHTMLX RichText Documentation',
                src: 'img/dhtmlx_logo.svg',
                href: 'https://docs.dhtmlx.com/',

            },
            items: [
                {
                    label: 'Examples',
                    href: 'https://docs.dhtmlx.com/richtext/samples/',
                    position: 'right',
                },
                {
                    label: 'Forum',
                    href: 'https://forum.dhtmlx.com/c/widgets/richtext',
                    position: 'right'
                },
                {
                    label: 'Support',
                    href: 'https://dhtmlx.com/docs/technical-support.shtml',
                    position: 'right',
                },
                {
                    label: 'Download',
                    href: 'https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Development center',
                    items: [
                        {
                            label: 'Download RichText',
                            href: 'https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml',
                            position: 'right',
                        },
                        {
                            label: 'Examples',
                            href: 'https://docs.dhtmlx.com/richtext/samples/',
                            position: 'right',
                        },
                        {
                            label: 'Blog',
                            href: 'https://dhtmlx.com/blog/tag/richtext/',
                        },
                        {
                            label: 'Forum',
                            href: 'https://forum.dhtmlx.com/c/widgets/richtext',
                            position: 'right'
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/DHTMLX',
                        },

                        {
                            label: 'Youtube',
                            href: 'https://www.youtube.com/user/dhtmlx',
                        },
                        {
                            label: 'Facebook',
                            href: 'https://www.facebook.com/dhtmlx',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/dhtmlx',
                        },
                        {
                            label: 'Linkedin',
                            href: 'https://www.linkedin.com/groups/3345009/',
                        },

                    ],
                },
                {
                    title: 'Company',
                    items: [
                        {
                            label: 'About us',
                            href: 'https://dhtmlx.com/docs/company.shtml',
                        },
                        {
                            label: 'Contact us',
                            href: 'https://dhtmlx.com/docs/contact.shtml',
                        },
                        {
                            label: 'Licensing',
                            href: 'https://dhtmlx.com/docs/products/dhtmlxRichText/#editions-licenses',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} XB Software Ltd.`,
        },
    },
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
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins:[
        [
            require.resolve('docusaurus-gtm-plugin'),
            {
              id: 'GTM-5M5RCSJ',
            }     
        ]
    ]
};