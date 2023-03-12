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
        <!-- 登录和搜索 -->
        <div class="HeadUserAvatar" >
            <el-icon size="25" class="Search"><Search /></el-icon>
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
                <RouterLink to="/start">
                    <el-icon class="animate_hover"><Odometer/></el-icon>
                    <span>起始页</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/todo">
                    <el-icon class="animate_hover" ><List /></el-icon>
                    <span>SomeToDo</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/chat">
                    <el-icon class="animate_hover"><ChatDotRound /></el-icon>
                    <span>闲言碎语</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/article">
                    <el-icon class="animate_hover"><Reading /></el-icon>
                    <span>抚今追昔</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/messageBoard">
                    <el-icon class="animate_hover"><Iphone /></el-icon>
                    <span>留个言叭</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="">
                    <el-icon class="animate_hover"><Position /></el-icon>
                    <span>还没想好</span>
                </RouterLink>
            </li>
        </ul>
    </header>
    <!-- 移动端 -->
    <div v-show="!indexStore.NavState" class="header">123</div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { index } from '@/store/index'
// storeIndex
const indexStore = index()
// 路由器
const router = useRouter()
// logo
let circleUrl = ref('/public/images/pic.png')
function GotoIndex() {
        window.location.replace('/')
}
// 用户头像
let UserAvatarUrl = ref('/public/images/topavatar.png')
let displayRegisterOption = ref(false)
function showOption() {
    displayRegisterOption.value = true
}
function blankOption() {
    displayRegisterOption.value = false
}
function login() {
    router.push({
        path:'/login'
    })
}
function register() {
    router.push({
        path: '/login/register'
    })
}
function UserMeg() {
    router.push({
        path: '/login'
    })
}
// 监视页面宽度
const getWidth = () => {
    indexStore.setInnerWidth(window.innerWidth);
};
getWidth();
window.addEventListener("resize", getWidth);
</script>


<style lang="css" scoped>
    .header {
        width: 100%;
        height: 75px;
        background-color: rgba(255, 255, 255, 1);
        transition: all 1s ease;
    }
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
        left:-1px;
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
        left: 49px;
        border:10px solid rgba(255, 255, 255, 0);
        border-bottom-color:rgb(255, 255, 255, 1);
        
    }

</style>