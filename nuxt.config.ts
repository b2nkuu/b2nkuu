export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  dir: {
    public: 'resource'
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/image',
    '@pinia/nuxt'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  pinia: {
    storesDirs: ['./**/*.store.ts'],
  },
})