<template>
    <!-- 导航栏 -->
    <header v-show="indexStore.NavState">
        <!-- logo -->
        <el-avatar 
        :size="40" 
        :src="circleUrl"
        @click = "GotoIndex"
        class = 'logo'
        />
        <!-- 登录 -->
        <div class="HeadUserAvatar" >
            <div @mouseleave="blankOption">
                <a href="javascript:;" @mouseenter="showOption" @click="UserMeg">
                    <img :src="UserAvatarUrl">
                </a>
                <Transition
                    appear
                    name="animate__animated animate__bounce"
                    enter-active-class="animate__fadeInRight"
                    leave-active-class="animate__fadeOutRight"
                >
                    <div class="register" v-show="displayRegisterOption">
                        <ul>
                            <li class='first' @click="login">登录</li>
                            <li class="last" @click="register">注册</li>
                        </ul>
                    </div>
                </Transition>
            </div>
            
        </div>
        <!-- 导航栏 -->
        <ul class="nav">
            <li>
                <a href="/start">
                    <v-icon name="md-pageview-round" class="animate_hover" scale="1.2"/>
                    <span>起始页</span>
                </a>
            </li>
            <li>
                <a href="/todo">
                    <v-icon name="hi-clipboard-list" class="animate_hover" scale="1.1"/>
                    <span>SomeToDo</span>
                </a>
            </li>
            <li>
                <a href="/chat">
                    <v-icon name="io-chatbubble-ellipses-sharp" class="animate_hover"/>
                    <span>闲言碎语</span>
                </a>
            </li>
            <li>
                <a href="/article">
                    <v-icon name="hi-book-open" class="animate_hover" scale="1.1"/>
                    <span>Some Blog</span>
                </a>
            </li>
            <li>
                <a href="/messageBoard">
                    <v-icon name="bi-envelope-heart-fill" class="animate_hover" scale="1.1"/>
                    <span>留个言叭</span>
                </a>
            </li>
            <li>
                <a href="/about">
                    <v-icon name="bi-send-fill" class="animate_hover" scale="1.1"/>
                    <span>关于我</span>
                </a>
            </li>
        </ul>
    </header>
    <!-- 移动端 -->
    <div v-show="!indexStore.NavState" class="header">
    <v-icon name="hi-menu" scale="2" class="mobile-menu" @click="showPopup"/>
    <el-avatar 
        :size="40" 
        :src="circleUrl"
        @click = "GotoIndex"
        class = 'mobile-logo'
        />
    </div>
    <van-popup
      v-model:show="showLeft"
      position="left"
      :style="{ width: '45%', height: '100%' }"
      lock-scroll="true"
    >
        <div style="height: 20%;width: 100%; display: flex;align-items: center;justify-content: center;">
            <el-avatar 
                :size="100" 
                :src="circleUrl"
                />
        </div>
        <ul class="mobile-nav">
            <li>
                <a href="/start" class="mobile-link">
                    <v-icon name="md-pageview-round" class="animate_hover" scale="1.2"/>
                    <span>起始页</span>
                </a>
            </li>
            <li>
                <a href="/todo" class="mobile-link">
                    <v-icon name="hi-clipboard-list" class="animate_hover" scale="1.1"/>
                    <span>SomeToDo</span>
                </a>
            </li>
            <li>
                <a href="/chat" class="mobile-link">
                   <v-icon name="io-chatbubble-ellipses-sharp"/>
                    <span>闲言碎语</span>
                </a>
            </li>
            <li>
                <a href="/article" class="mobile-link">
                    <v-icon name="hi-book-open" class="animate_hover" scale="1.1"/>
                    <span>Some Blog</span>
                </a>
            </li>
            <li>
                <a href="/messageBoard" class="mobile-link">
                    <v-icon name="bi-envelope-heart-fill" class="animate_hover" scale="1.1"/>
                    <span>留个言叭</span>
                </a>
            </li>
            <li>
                <a href="/about" class="mobile-link">
                    <v-icon name="bi-send-fill" class="animate_hover" scale="1.1"/>
                    <span>关于我</span>
                </a>
            </li>
        </ul>
        <div class="bear"></div>
    </van-popup>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { index } from '@/store/index'
// storeIndex
const indexStore = index()
// logo
let circleUrl = ref('/images/pic.png')
function GotoIndex() {
        window.location.replace('/')
}
// 用户头像
let UserAvatarUrl = indexStore.avatar
let displayRegisterOption = ref(false)
function showOption() {
    displayRegisterOption.value = true
}
function blankOption() {
    displayRegisterOption.value = false
}
function login() {
    window.location.href = '/login';
}
function register() {
    window.location.href = '/register';
}
function UserMeg() {
    window.location.href = '/login';
}
// 监视页面宽度
const getWidth = () => {
    indexStore.setInnerWidth(window.innerWidth);
};
getWidth();
window.addEventListener("resize", getWidth);
// 弹出盒子
let showLeft = ref(false);
const showPopup = () => {
    showLeft.value = true;
};
</script>


<style lang="css" scoped>
    @keyframes bear_run {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: -1600px 0;
      }
    }
    /* 移动端 */
    .bear {
      position: absolute;
      top:70rem;
      left:-1rem;
      width: 200px;
      height: 100px;
      background: url("/src/assets/images/bear.png") no-repeat;
      animation: bear_run .7s steps(8) infinite;

    }
    .mobile-link {
        display: block;
        height: 100%;
        width: 100%;
        color: #000;
        font-size: 2.5rem;
        display: flex;
        align-items: center;
        /* center代表水平方向 */
        justify-content: center;

    }
    .mobile-link:hover {
        color: rgb(113, 238, 178);
        background-color: #a29f9f;
    }
    .mobile-nav{
        position: relative;
        height: 60%;
        width: 100%;
    }
    .mobile-nav li {
        height: 13%;
        margin-top: 2rem;
        /* background-color: black; */
        width: 100%;


    }
    .mobile-logo {
        float: right;
        margin: 3rem;
    }
    .mobile-menu {
        float: left;
        margin: 3rem;
        color:#9c8e8e;
    }
    .header {
        width: 100%;
        height: 10rem;
        /* background-color: rgba(255, 255, 255, 1); */
        transition: all 1s ease;
    }
    /* pc端 */
    header {
        margin: 20px auto;
        height: 75px;
        width: 95%;
        font-size: 18px;
        background-color: rgba(255, 255, 255, 0);
        border-radius: 15px;
        transition: all 1s ease;
    }
    header:hover {
        background-color: rgba(255, 255, 255, 0.80);;
    }
    .logo {
        cursor: pointer;
        margin-top: 17px;
        margin-left: 30px;
    }
    header .nav {

        float: right;
        height: 100%;

    }
    header .nav li {
        display: flex;
        align-items: center;
        /* center代表水平方向 */
        justify-content: center;
        /* center代表垂直方向 */
        flex-wrap: wrap;
        float: left;
        margin-left: 10px;
        width: 121px;
        height: 100%; 
    }
    header .nav li a{
        color: rgb(81, 66, 66);
        position: relative;
        display: flex;
        align-items: center;
        /* center代表水平方向 */
        justify-content: center;
        /* center代表垂直方向 */
        transition: all .5s ease;
    }
    header .nav li a span {
        margin-left: 3px;
    }
    header .nav li a::after{
        margin-top: 50px;
        content: '';
        position: absolute;
        display: block;
        height: 4px;
        width: 0;
        border-radius: 30px;
        background-color: rgb(113, 238, 178);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
    }
    header .nav li a:hover::after {
        width: 100%;
    }
    header .nav li a:hover {
        color: rgb(113, 238, 178);
    }
    @keyframes animate-hover{
        0%{
            transform: rotate(0);
        }
        25%{
            transform: rotate(45deg);
        }
        50% {
            transform: rotate(0deg);
        }
        75% {
            transform: rotate(-45deg);
        }
        100%{
            transform: rotate(0);
        }
    }
    header .nav li a:hover .animate_hover {
        animation: animate-hover .5s linear 2;
    }

    .HeadUserAvatar {
        display: flex;
        align-items: center;
        /* center代表水平方向 */
        justify-content: center;
        /* center代表垂直方向 */
        position: relative;
        float: right;
        height: 100%;
        margin: 0 10px;
    } 
    .HeadUserAvatar img {
        border-radius: 100%;
        cursor: pointer;
        height: 35px;
        margin: 7px 15px 0;
    }
    .HeadUserAvatar img:hover {
        animation: animate-hover .5s linear 2;
    }
    .Search {
        color: rgb(81, 66, 66);
        transition: all .5s ease;
        cursor: pointer;
    }
    .Search:hover {
        color: rgb(113, 238, 178);
    }
    .register{
        position: absolute;
        top: 75px;
        left:-10px;
        height: 80px;
        width: 80px;
        text-align: center;
        border-radius: 15px;
        font-size: 15px;
        background-color: #fff;
        opacity: .9;
        --animate-duration: 0.3s;
    }
    .register ul {
        height: 100%;
        width: 100%;
    }
    .register li {
        padding-top: 10px;
        display: block;
        height: 50%;
        width: 100%;
        cursor: pointer;
    }
    .register li:hover {
        background-color: rgba(113, 238, 178, 0.9);
    }
    .first {
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }
    .last {
        border-bottom-left-radius: 15px; 
        border-bottom-right-radius: 15px;
    }
    .register::after{
        content: '';
        position: absolute;
        display: block;
        top: -19px;
        left: 32px;
        border:10px solid rgba(255, 255, 255, 0);
        border-bottom-color:rgb(255, 255, 255, 1);
        
    }

</style>