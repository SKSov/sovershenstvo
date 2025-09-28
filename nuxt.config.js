export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Совершенство — ваша стоматология',
    },
  },
  htmlAttrs: {
    lang: 'ru',
  },
  css: ['../assets/css/index.css'],

  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@nuxt/fonts'],

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [400, 500, 600, 700],
        subsets: ['latin', 'cyrillic'],
        display: 'swap',
      },
    ],
  },
})
