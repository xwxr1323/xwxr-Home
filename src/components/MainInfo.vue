<script setup>
import { reactive } from 'vue';
import { index } from '@/store/index.js'
const indexStore = index()
</script>

<template>
    <div style="text-align: center;">
        <h1 class="center-text">Xwxr Home</h1>
        <div class="lyricSentence">
            <v-icon name="fa-quote-left" scale="0.8" animation="wrench" speed='slow'/>
            <div class="sentence" >
                <VueTyper
                class="vue-typer"
                text='给时光以生命，给岁月以文明' 
                type-delay='200' 
                erase-style='backspace'
                caret-animation='expand'
                pre-type-delay='500'
                ></VueTyper>
            </div>
            <v-icon name="fa-quote-right" scale="0.8" animation="wrench" speed="slow"/>
            <p class="sentence-p, reactive_p">夜已深,不久之后就是黎明</p>
        </div>
        <div class="top-social">
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
        font-size: 2.9rem;
        color: #fff;
        font-family: 'Zhiyong-Elegant';
    }
    .lyricSentence {
        padding-top: 1.05rem;
        margin-top: 0.68rem;
        height: 40%;
        width: 100%;
        text-align: center;
        border-radius: 19px;
        color: #565454;
        background-color: rgba(255, 255, 255, .5);
    }
    .sentence {
        display: inline-block;
        font-size: 1.09rem;
        width: 45%;
    }
    .vue-typer {
        color: #565454;
    }
    .sentence-p {
        cursor:default;
        font-family: 'hljt';
        margin-top: 1.36rem;
        font-size: 1.36rem;
        transition: all 1s ease-in-out;
    }
    .sentence-p:hover {
        color: rgb(113, 238, 178);;
    }
    .top-social {
        display: inline-block;
        width: 350px;
        height: 32px;
        margin-top: 30px;
        margin-left: 10px;
    }
    .top-social li {
        float: left;
        margin-right: 10px;
    }
    .top-social img {
        cursor: pointer;
        height: 40px;
        width: 40px;
        padding: 9px;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
    }
</style>
