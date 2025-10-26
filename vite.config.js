import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        crypto: './crypto.html',
        cats: './cats.html',
        news: './news.html'
      }
    }
  }
})
