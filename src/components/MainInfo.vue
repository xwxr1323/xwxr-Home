<script setup>
import { reactive, ref } from 'vue';
import { index } from '@/store/index.js'
const indexStore = index()
let sentence = ref(import.meta.env.VITE_sentence)
let sentence_p = ref(import.meta.env.VITE_sentence_p)
</script>

<template>
    <div style="text-align: center;">
        <h1 class="center-text center-text_reactive">Xwxr Home</h1>
        <div class="lyricSentence lyricSentence_reactive">
            <v-icon name="fa-quote-left" scale="0.8" animation="wrench" speed='slow'/>
            <div class="sentence sentence_reactive" >
                <VueTyper
                class="vue-typer"
                :text='sentence' 
                type-delay='200' 
                erase-style='backspace'
                caret-animation='expand'
                pre-type-delay='500'
                ></VueTyper>
            </div>
            <v-icon name="fa-quote-right" scale="0.8" animation="wrench" speed="slow"/>
            <p class="sentence-p sentence_p_reactive">{{ sentence_p }}</p>
        </div>
        <div class="top-social top-social_reactive">
            <ul>
                <li @click="indexStore.pre_bg">
                    <img src="@/assets/images/pre.png" alt="上一篇">
                </li>
                <li>
                    <a href="https://space.bilibili.com/1644064934" target="_blank" title="BiliBili">
                        <img alt="BiliBili" src="@/assets/images/bilibili.png">
                    </a>
                </li>
                <li>
                    <a href="tencent://message/?uin=86319198" target="_blank" title="QQ">
                        <img alt="QQ" src="@/assets/images/qq.png">
                    </a>
                </li>
                <li>
                    <a href="https://github.com/xwxr1323" target="_blank" title="Github">
                        <img alt="Github" src="@/assets/images/github.png">
                    </a>
                </li>
                <li>
                    <a href="https://v.douyin.com/S9hrhUg" target="_blank" title="Tiktok">
                        <img alt="Tiktok" src="@/assets/images/tiktok.png">
                    </a>
                </li>
                <li>
                    <a title="E-mail" target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=IBgWExEZERkYYFFRDkNPTQ">
                        <img alt="E-mail" src="@/assets/images/mail.png">
                    </a>
                </li>
                <li @click="indexStore.next_bg">
                    <img src="@/assets/images/next.png" alt="下一篇">
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .center-text {
        text-align: center;
        cursor:default;
        color: #fff;
        font-family: 'Zhiyong-Elegant';
    }
    .lyricSentence {
        height: 40%;
        width: 100%;
        text-align: center;
        border-radius: 19px;
        color: #565454;
        background-color: rgba(255, 255, 255, .5);
    }
    .sentence {
        display: inline-block;
        
    }
    .sentence-p {
        cursor:default;
        font-family: 'hljt';
        transition: all 1s ease-in-out;
    }
    .sentence-p:hover {
        color: rgb(113, 238, 178);;
    }
    .top-social {
        display: inline-block;
    }
    .top-social li {
        float: left;
        margin-right: 0.69rem;
    }
    .top-social img {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
    }
</style>
