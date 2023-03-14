// vite.config.js
import { defineConfig, loadEnv } from "file:///D:/XWXR/Blog/blog_vue/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/XWXR/Blog/blog_vue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import { createHtmlPlugin } from "file:///D:/XWXR/Blog/blog_vue/node_modules/vite-plugin-html/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\XWXR\\Blog\\blog_vue";
var vite_config_default = ({
  mode
}) => defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      template: "index.html",
      inject: {
        data: {
          title: loadEnv(mode, process.cwd()).VITE_TITLE
        }
      }
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
      find: "@",
      replacement: path.resolve(__vite_injected_original_dirname, "src")
    }]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxYV1hSXFxcXEJsb2dcXFxcYmxvZ192dWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFhXWFJcXFxcQmxvZ1xcXFxibG9nX3Z1ZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovWFdYUi9CbG9nL2Jsb2dfdnVlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLWh0bWxcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtcclxuICBtb2RlXHJcbn0pID0+IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBjcmVhdGVIdG1sUGx1Z2luKHtcclxuICAgICAgbWluaWZ5OiB0cnVlLFxyXG4gICAgICB0ZW1wbGF0ZTogJ2luZGV4Lmh0bWwnLFxyXG4gICAgICBpbmplY3Q6IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0aXRsZTogbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKS5WSVRFX1RJVExFLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBobXI6IHsgb3ZlcmxheTogdHJ1ZSB9LFxyXG4gICAgcG9ydDogXCI4MFwiLFxyXG4gICAgaG9zdDogXCIwLjAuMC4wXCJcclxuICB9LFxyXG4gIG9wdGltaXplRGVwczoge1xyXG4gICAgZXhjbHVkZTogW1wib2gtdnVlLWljb25zL2ljb25zXCJdXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczogW3tcclxuICAgICAgZmluZDogJ0AnLFxyXG4gICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXHJcbiAgICB9LF1cclxuICB9XHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5UCxTQUFTLGNBQWMsZUFBZTtBQUMvUixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsd0JBQXdCO0FBSGpDLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsQ0FBQztBQUFBLEVBQ2Q7QUFDRixNQUFNLGFBQWE7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixpQkFBaUI7QUFBQSxNQUNmLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxRQUNOLE1BQU07QUFBQSxVQUNKLE9BQU8sUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDLEVBQUU7QUFBQSxRQUN0QztBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixLQUFLLEVBQUUsU0FBUyxLQUFLO0FBQUEsSUFDckIsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxvQkFBb0I7QUFBQSxFQUNoQztBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTyxDQUFDO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDNUMsQ0FBRTtBQUFBLEVBQ0o7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
