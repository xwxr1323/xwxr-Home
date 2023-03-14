import { createApp } from 'vue'
import App from './App.vue'
// 全局样式
import '@/style/style.css'
// 动画库
import 'animate.css'
// 打字效果
import VueTyper from 'vue3-typer'
import "vue3-typer/dist/vue-typer.css"
// icon
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaQuoteLeft, FaQuoteRight, HiMenu, IoChatbubbleEllipsesSharp,
  BiSendFill, BiEnvelopeHeartFill, HiClipboardList, HiBookOpen, MdPageviewRound
} from "oh-vue-icons/icons";
addIcons(FaQuoteLeft, FaQuoteRight, HiMenu, IoChatbubbleEllipsesSharp,
         BiSendFill, BiEnvelopeHeartFill, HiClipboardList, HiBookOpen, MdPageviewRound);
import '@/font/font_style.css'
// pinia
import { createPinia } from 'pinia'
// 移动端
import { Popup } from 'vant';
import 'vant/lib/index.css';

const pinia = createPinia();
const app = createApp(App);

app.use(Popup);

app.use(pinia)
app.component("v-icon", OhVueIcon);
app.use(VueTyper)

app.mount('#app')