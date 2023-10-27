// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/footer.scss" as *;
            @use "@/assets/scss/index.scss" as *;
            @use "@/assets/scss/modal.scss" as *;
            @use "@/assets/scss/navbar.scss" as *;
          `
        }
      }
    }
  }
})
