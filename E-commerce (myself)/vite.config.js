import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Mock the `process` global variable for the browser
  define: {
    'process.env': {} // Mock process.env to prevent "process is not defined" error
  },

  // Optional: if you want to polyfill Node.js built-ins (e.g., `Buffer`, `process`, etc.)
  // plugins: [
  //   polyfills()
  // ],
})
