import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/style/style.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { router } from '/src/router/index'
import 'animate.css'
import VueTyper from 'vue3-typer'
import "vue3-typer/dist/vue-typer.css"
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaQuoteLeft, FaQuoteRight  } from "oh-vue-icons/icons";
import '@/font/font_style.css'
import { createPinia } from 'pinia'

addIcons(FaQuoteLeft, FaQuoteRight);
const pinia = createPinia();
const app = createApp(App);


app.use(pinia)
app.component("v-icon", OhVueIcon);
app.use(VueTyper)
app.use(ElementPlus)
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')