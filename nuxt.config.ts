
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@element-plus/nuxt',
        "@nuxtjs/tailwindcss",
        'nuxt-icon',
        '@nuxt/content'
    ],
    elementPlus: { /** Options */ },
    tailwindcss: {
        // Options
    },
    nuxtIcon: {
        size: '100px', // default <Icon> size applied
        class: 'icon', // default <Icon> class applied
        aliases: {
            'nuxt': 'logos:nuxt-icon',
        }
    },
    content: {
        // ... options
    },

    app: {
        head: {
            viewport: 'width=device-width,initial-scale=1',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            link: [
                { rel: 'icon', href: '/favicon.ico' },
            ],
            script: [
                ...(process.env.NODE_ENV === 'production' ? [
                    // Google Analytics Code
                    {
                        src: "https://www.googletagmanager.com/gtag/js?id=G-ZB4EQ5DYD5",
                        async: true,
                    },
                    { src: "/js/analytics.js" }
                ]
                    : [])
            ]
        }
    },
    devtools: {
        enabled: true,
    }
})
