// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Poppins: true,
      Lato: [100, 300, 600, 900],
    },
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: "Project ONG",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        { hid: "tailwindcss", src: "https://cdn.tailwindcss.com", defer: true },
      ],
    },
  },
  plugins: ["~/plugins/axios.js"],
  runtimeConfig: {
    public: {
      APP_TIMEOUT: process.env.APP_TIMEOUT,
      APP_URL: process.env.APP_URL,
    },
  },
});
