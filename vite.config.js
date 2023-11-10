import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'
import { URL, fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three.js')) {
            return 'three'
          }
        }
      }
    }
  }
})
