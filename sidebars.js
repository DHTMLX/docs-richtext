module.exports = {
    docs: [{
            type: "doc",
            id: "how_to_start",
        },
        {
            type: "doc",
            id: "overview",
        },
        {
            type: "category",
            label: "API",
            collapsed: false,
            link: {
				type: 'doc',
				id: 'api/overview'
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
        {
            type: "doc",
            id: "whats_new",
        },
        {
            type: "category",
            label: "Guides",
            collapsed: false,
            link: {
                type: 'generated-index',
                title: 'Guides',
                //description: '',
                //slug: '/category/docusaurus-guides',
                keywords: ['guides'],
                image: '/img/docusaurus.png',
        },
            items: [
                "guides/initialization",
                "guides/configuration",
                "guides/localization",
                "guides/loading_data",
                "guides/working_with_richtext",
                "guides/customization",
                "guides/event_handling",
                "guides/angular_integration",
                "guides/react_integration",
                "guides/vuejs_integration",
            ],
        },
    ],
}