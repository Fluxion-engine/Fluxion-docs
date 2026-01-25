export default {
    title: 'Fluxion Engine',
    description: 'Mathematical Animation Engine for Programmatic Videos',

    themeConfig: {
        search: {
            provider: 'local'
        },

        logo: '/logo.png',
        siteTitle: false, // Branding is handled by our custom Layout.vue slot

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Installation', link: '/installation' },
            { text: 'Tutorials', link: '/tutorials/quickstart' },
            { text: 'Guides', link: '/guides/using_text' },
            { text: 'Examples', link: '/examples' },
            { text: 'Reference', link: '/reference/animations' },
            { text: 'Plugins', link: '/plugins' },
            { text: 'GitHub', link: 'https://github.com/Fluxion-engine/fluxion' }
        ],

        sidebar: {
            '/tutorials/': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Installation', link: '/installation' },
                        { text: 'Quickstart', link: '/tutorials/quickstart' },
                        { text: 'Building Blocks', link: '/tutorials/building_blocks' },
                        { text: 'Output & Configuration', link: '/tutorials/output_and_config' },
                    ]
                }
            ],
            '/reference/': [
                {
                    text: 'Reference Manual',
                    items: [
                        { text: 'Animations', link: '/reference/animations' },
                        { text: 'Cameras', link: '/reference/cameras' },
                        { text: 'Configuration', link: '/reference/configuration' },
                        { text: 'Mobjects', link: '/reference/mobjects' },
                        { text: 'Scenes', link: '/reference/scenes' },
                        { text: 'Utilities', link: '/reference/utilities' },
                    ]
                }
            ],
            '/': [
                {
                    text: 'Documentation',
                    items: [
                        { text: 'Installation', link: '/installation' },
                        { text: 'Quickstart', link: '/tutorials/quickstart' },
                        { text: 'Examples', link: '/examples' },
                        { text: 'Reference Manual', link: '/reference/animations' },
                        { text: 'Plugins', link: '/plugins' },
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Fluxion-engine/fluxion' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026 Fluxion Community'
        }
    },

    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['meta', { name: 'theme-color', content: '#99d19c' }]
    ],

    markdown: {
        theme: {
            light: 'github-light',
            dark: 'github-dark'
        },
        lineNumbers: true
    },

    appearance: 'dark',
    cleanUrls: true
}
