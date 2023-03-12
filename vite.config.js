import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue';
import path from 'path'
import { createHtmlPlugin } from "vite-plugin-html";



export default ({
  mode
}) => defineConfig({
  plugins: [
    vue(),
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
  }
})