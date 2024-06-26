import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from 'vite-plugin-mdx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(),mdx() ],
})
