import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    css: ['~/assets/styles.sass'],
    modules: ['@pinia/nuxt'],
    pinia: {
      storesDirs: ['./stores/**'],
    },
  })