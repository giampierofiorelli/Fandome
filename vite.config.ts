import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://<user>.github.io/Fandome/ on GitHub Pages
export default defineConfig({
  base: '/Fandome/',
  plugins: [react()],
})
