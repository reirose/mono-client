// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  nitro: {
    devProxy: {
      '/api/': {
        target: 'http://localhost:3030/',
        changeOrigin: true,
        prependPath: true,
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },
  vite: {
    server: {
      host: true,
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        'beauteously-galactophorous-zariyah.ngrok-free.dev'
      ]
    }
  }
})
