// This is the Vite configuration file for the client-side application
// It sets up the Vite development server and configures the Vue.js plugin
// It also sets up a proxy for the WYR API to avoid CORS issues
// The proxy will forward requests from the client to the server
// The server is running on localhost:3000 and the client is running on localhost:5173
// The proxy will forward requests from /wyr to http://localhost:3000/wyr
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // Requests to localhost:5173/wyr will be proxied to localhost:3000/wyr
      '/wyr': 'http://localhost:3000/'
      
    }
  }
})
