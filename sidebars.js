module.exports = {
    docs: [
        {
            type: "doc",
            id: "index",
        },
        {
            type: "doc",
            id: "how_to_start",
        },
        {
            type: "category",
            label: "What's new and migration",
            collapsible: true,
            collapsed: true,
            link: {
                type: "generated-index",
                title: "What's new and migration",
                //slug: '/category/docusaurus-guides',
                keywords: ['news'],
                image: "/img/docusaurus.png"
            },
            items: [
                'news/whats_new',
                'news/migration'
            ]
        },
        {
            type: "category",
            label: "API",
            collapsible: true,
            collapsed: false,
            link: {
                type: "generated-index",
                title: "RichText API",
                keywords: ["api", "methods", "properties", "events"],
                image: "/img/docusaurus.png"
            },
            items: [
                // JS RichText methods
                {
                    type: "category",
                    label: "RichText methods",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "generated-index",
                        title: "RichText methods",
                        keywords: ["methods"],
                        image: "/img/docusaurus.png"
                    },
                    items: [
                        "api/methods/destructor",
                        "api/methods/get-value",
                        "api/methods/set-value",
                        "api/methods/set-config",
                        "api/methods/set-locale"
                    ]
                },
                // JS RichText internal methods
                {
                    type: "category",
                    label: "RichText internal API",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "generated-index",
                        title: "Internal API overview",
                        keywords: ["internal api"],
                        image: "/img/docusaurus.png"
                    },
                    items: [
                        {
                            type: "category",
                            label: "Event Bus methods",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: "generated-index",
                                title: "Event Bus methods",
                                keywords: ["internal api"],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "api/internal/detach",
                                "api/internal/exec",
                                "api/internal/intercept",
                                "api/internal/on",
                                "api/internal/set-next"
                            ]
                        },
                        {
                            type: "category",
                            label: "State methods",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: "generated-index",
                                title: "State methods",
                                keywords: ["internal api"],
                                image: "/img/docusaurus.png"
                            },
                            items: [
                                "api/internal/get-reactive-state",
                                "api/internal/get-state"
                            ]
                        }
                    ]
                },
                // JS RichText events
                {
                    type: "category",
                    label: "RichText events",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "generated-index",
                        title: "RichText events",
                        keywords: ["internal api"],
                        image: "/img/docusaurus.png"
                    },
                    items: [
                        "api/events/align",
                        "api/events/clear-text-format",
                        "api/events/copy",
                        "api/events/create-new",
                        "api/events/cut",
                        "api/events/delete-link",
                        "api/events/export",
                        "api/events/import",
                        "api/events/indent",
                        "api/events/insert-image",
                        "api/events/insert-line",
                        "api/events/insert-link",
                        "api/events/insert-list",
                        "api/events/outdent",
                        "api/events/paste",
                        "api/events/print",
                        "api/events/redo",
                        "api/events/resize-image",
                        "api/events/set-font-family",
                        "api/events/set-font-size",
                        "api/events/set-line-height",
                        "api/events/set-text-color",
                        "api/events/set-text-format",
                        "api/events/set-text-style",
                        "api/events/show-popup",
                        "api/events/subscript",
                        "api/events/superscript",
                        "api/events/toggle-fullscreen-mode",
                        "api/events/toggle-layout-mode",
                        "api/events/toggle-shortcut-info",
                        "api/events/undo",
                        "api/events/update-link"
                    ]
                },
                // JS RichText properties
                {
                    type: "category",
                    label: "RichText properties",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "generated-index",
                        title: "RichText properties",
                        keywords: ["properties"],
                        image: "/img/docusaurus.png"
                    },
                    items: [
                        "api/config/default-styles",
                        "api/config/fullscreen-mode",
                        "api/config/image-upload-url",
                        "api/config/layout-mode",
                        "api/config/locale",
                        "api/config/menubar",
                        "api/config/toolbar",
                        "api/config/value"  
                    ]
                }
            ]
        },
        //start framework integration
        {
            type: "category",
            label: "Integration with frameworks",
            link: {
                type: "generated-index",
                title: "BIntegration with frameworks",
                keywords: ['frameworks integration'],
                image: "/img/docusaurus.png"
            },
            items: [
                "guides/integration_with_angular",
                "guides/integration_with_react",
                "guides/integration_with_vue",
                "guides/integration_with_svelte",
            ]
        },
        // end framework integration
        {
            type: "category",
            label: "Guides",
            collapsed: false,
            link: {
                type: "generated-index",
                title: "Guides",
                keywords: ["guides"],
                image: "/img/docusaurus.png"
            },
            items: [
                "guides/initialization",
                "guides/configuration",
                "guides/localization",
                "guides/typescript_support"
            ]
        }
    ]
}
