import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
  title: 'lelnice',
  srcDir: 'posts',
  themeConfig: {
    outline: 'deep',
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
        theme: fileURLToPath(new URL('./theme', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 两种方式都可以
          additionalData: '@import "@/theme/style/variables.scss";',
        },
      },
    },
  },
})
