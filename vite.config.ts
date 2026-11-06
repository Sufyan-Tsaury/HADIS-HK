import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Otomatis gunakan root '/' saat di-deploy di Vercel, atau subpath '/HADIS-HK/' untuk GitHub Pages
  base: process.env.VERCEL ? '/' : (process.env.BASE_PATH || '/HADIS-HK/'),
  plugins: [
    react(),
    tailwindcss(),
  ],
})
