import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { swcPlugin } from 'vite-plugin-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), swcPlugin()],
  base: "/portfolio/"
})
