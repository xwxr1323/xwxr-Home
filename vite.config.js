import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import { createHtmlPlugin } from "vite-plugin-html";



export default ({
  mode
}) => defineConfig({
  base: '/index',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createHtmlPlugin({
      minify: true,
      template: 'index.html',
      inject: {
        data: {
          title: loadEnv(mode, process.cwd()).VITE_TITLE,
        },
      },
    })
  ],
  server: {
    hmr: { overlay: true },
    port: "80",
    host: "0.0.0.0"
  },
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"]
  },
  resolve: {
    alias: [{
      find: '@',
      replacement: path.resolve(__dirname, "src"),
    },]
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      }
    },
    minify: 'terser', // 必须启用：terserOptions配置才会有效
    terserOptions: {
      compress: {
        // 生产环境时移除console.log调试代码
        drop_console:true,
        drop_debugger: true,
      }
    }
  },
})