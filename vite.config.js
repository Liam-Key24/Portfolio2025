import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio2025/', // 👈 replace this with your actual GitHub repo name
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs', // 👈 this tells Vite to build into /docs for GitHub Pages
  },
})
