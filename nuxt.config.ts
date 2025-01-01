import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
  ],
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
});
