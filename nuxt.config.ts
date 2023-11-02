// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt'
  ],
  css: [
    '~/assets/scss/navbar.scss'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=PT+Mono&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gabarito&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,500,300,700' }
      ]
    }
  }
})
