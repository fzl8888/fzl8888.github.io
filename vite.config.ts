import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Since your URL is fzl8888.github.io (User Site), the base should be '/'
  // If it was a project site (e.g., fzl8888.github.io/my-repo), it would be '/my-repo/'
  base: '/', 
  build: {
    outDir: 'dist',
  }
})