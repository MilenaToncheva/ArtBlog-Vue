import Vue from 'vue';
import VueRouter from 'vue-router';

import AppStart from '@/components/Start.vue';
import AppArticlesInit from '@/components/article/ArticlesInit.vue';
import AppAuth from '@/components/auth/Auth.vue';
const routes=[
    {
        path:'/', component:AppStart
    },
    {
        path:'/home', component:()=>import('@/components/article/ArticlesAll.vue')
    },
    {path:'/users', component:AppAuth, children:[
        {
            path:'register', component:()=>import('@/components/auth/Register.vue')
        },
        {
    path:'login', component:()=>import('@/components/auth/Login.vue')
        }
    ]},
    {path:'/articles', component:AppArticlesInit, children:[
        {
            path:'all',component:()=>import('@/components/article/ArticlesAll.vue')
        },
        {
            path:'my-articles',component:()=>import('@/components/article/ArticlesMine.vue')
        },
        {
            path:'create',component:()=>import('@/components/article/ArticleCreate.vue')
        },
        {
            path:'details/:id', name:'articleDetails',component:()=>import('@/components/article/ArticleDetails.vue')
        },
        {
            path:'edit/:id',name:'articleEdit',component:()=>import('@/components/article/ArticleEdit.vue')
        }
    ]},
    {
        path:'*', component:()=>import('@/components/NotFound.vue')
    }  
]

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes
});