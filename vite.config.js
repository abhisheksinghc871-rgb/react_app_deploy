import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' => kisi bhi repo name ke saath GitHub Pages par chalega
export default defineConfig({
  base: "/react_app_deploy/",
  plugins: [react()],
  base: './',
})
