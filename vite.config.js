import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from GitHub Pages at https://zivdemri2012.github.io/coraso-restuarant/
  base: '/coraso-restuarant/',
})
