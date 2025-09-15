export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      title: "B2NKUU ~ Profile Information",
      meta: [{ name: "description", content: "B2NKUU ~ Profile Information" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
  ssr: false,
  dir: {
    public: "resource",
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  pinia: {
    storesDirs: ["./**/*.store.ts"],
  },
});
