import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
  base: './', /*Desde el lugar actual, busca los assets*/
  build: {
    outDir: 'docs',
  }

})