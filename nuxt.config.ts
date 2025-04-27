// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
export default defineNuxtConfig({
  devtools: { enabled: false },
  build: {
    transpile: ['vuetify']
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  css: [
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=PT+Mono&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gabarito&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,500,300,700' }
      ]
    }
  }
});
