import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const index = defineStore('index', () => {
    
console.log(import.meta.env.VITE_BgUrl)
    let num = ref(Math.floor(Math.random() * 10 + 1))
    let bgURL = computed(() => {
        return `/images/background${num.value}.webp`
    })
    function next_bg() {
        if (num.value === 10) {
            num.value = 1
        } else {
            num.value++
        }
    }
    function pre_bg() {
        if (num.value === 1) {
            num.value = 10
        } else {
            num.value--;
        }
    }
    return { bgURL, pre_bg, next_bg }
})