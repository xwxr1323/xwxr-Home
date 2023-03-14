import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const index = defineStore('index', () => {
    // bgURL
    let num = ref(Math.floor(Math.random() * 9 + 1))
    let bgURL = computed(() => {
        return `/images/background${num.value}.webp`
    })
    function next_bg() {
        if (num.value === 9) {
            num.value = 1
        } else {
            num.value++
        }
    }
    function pre_bg() {
        if (num.value === 1) {
            num.value = 9
        } else {
            num.value--;
        }
    }
    // 页面宽度
    let innerWidth = ref(null)
    let NavState = ref(null)
    function setInnerWidth(value) {
            innerWidth.value = value;
            if (value >= 1020) {
                NavState.value = true;
            } else {
                NavState.value = false;
            }
    }
    // 用户头像
    let avatar = '/public/images/topavatar.png'
    return { bgURL, pre_bg, next_bg, innerWidth, NavState, setInnerWidth, avatar }
})