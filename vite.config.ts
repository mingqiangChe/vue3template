import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    ElementPlus(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
      dts: resolve(__dirname, 'src/auto-imports.d.ts'),
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: resolve(__dirname, 'src/components.d.ts'),
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    // https: false, // 禁用 https
    port: 3000, // 监听的端口
    host: '0.0.0.0', // 允许从外部访问
    open: true, // 自动打开浏览器
    cors: true, // 启用 CORS
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // 后端代理地址
        changeOrigin: true, // 更改请求头中的 Origin
      },
    },
  },
  build: {
    target: 'es2015',
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['unplugin-icons'],
  },
});
