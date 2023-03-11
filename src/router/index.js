import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/Index.vue'
import login from '@/views/Login.vue'
import loginCom from '@/components/LoginCom.vue'
import RegisterCom from '@/components/RegisterCom.vue'
import Start from '@/views/Start.vue'
import TodoList from '@/views/TodoList.vue'
import Chat from '@/views/Chat.vue'
import Article from '@/views/Article.vue'
import MessageBoard from '@/views/MessageBoard.vue'


let routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: index
    },
    {
        path: '/login',
        component: login,
        children: [
            {
                path: '',
                component: loginCom
            },
            {
                path: 'register',
                component: RegisterCom
            }
        ]
    },
    {
        path: '/start',
        component: Start
    },
    {
        path: '/todo',
        component: TodoList
    },
    {
        path: '/chat',
        component: Chat
    },
    {
        path: '/article',
        component: Article
    },
    {
        path: '/messageBoard',
        component: MessageBoard
    }

]
export const router = createRouter({
    history: createWebHistory(),
    routes
})