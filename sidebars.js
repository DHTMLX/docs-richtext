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
            type: "doc",
            id: "whats_new",
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
                        "api/events/set-layout-mode",
                        "api/events/set-line-height",
                        "api/events/set-text-color",
                        "api/events/set-text-format",
                        "api/events/set-text-style",
                        "api/events/set-value",
                        "api/events/subscript",
                        "api/events/superscript",
                        "api/events/toggle-fullscreen",
                        "api/events/undo",
                        "api/events/update-link"
                    ]
                },
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
                        // JS RichText
                        "api/config/default-styles",
                        "api/config/fullscreen",
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
        /*
        {
            type: "category",
            label: "API",
            collapsed: false,
            link: {
                type: "doc",
                id: "api/overview"
            },
            items: [
                "api/methods",
                "api/events_bus",
                "api/events",
                "api/properties",
                "api/editor_api_methods",
                "api/toolbar_methods",
                "api/toolbar_controls",
            ],
        },
        */
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
                "guides/loading_data",
                "guides/working_with_richtext",
                "guides/customization",
                "guides/event_handling",
                //"guides/angular_integration",
                //"guides/react_integration",
                //"guides/vue_integration"
                //"guides/svelte_integration"
            ]
        }
    ]
}
