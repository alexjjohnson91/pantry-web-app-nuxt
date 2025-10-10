// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  typescript: {
    strict: true, // enables strict mode for Nuxt layers
    shim: false, // disables legacy Vue shims
  },

  modules: ['@nuxt/eslint'],
  eslint: {},
})
