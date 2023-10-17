// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Project ONG',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      script: [
        { hid: 'tailwindcss', src: 'https://cdn.tailwindcss.com', defer: true }
      ]
    },
  },

})



