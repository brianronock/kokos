import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // **********************************
  // * Extension for XAMPP Deployment *
  // **********************************
  base: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  build: {
    // overwrite dist Folder if outside the Projekt folder
    emptyOutDir: true,
    //outDir: "c:/xampp/htdocs/distVue",
    outDir: "./dist",
  }
  // **************************************
  // * End Extension for XAMPP Deployment *
  // **************************************
})
