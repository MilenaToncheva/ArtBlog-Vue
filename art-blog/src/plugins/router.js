import Vue from 'vue';
import VueRouter from 'vue-router';

import AppStart from '@/components/Start.vue';
import AppArticlesInit from '@/components/article/ArticlesInit.vue';
import AppAuth from '@/components/auth/Auth.vue';

function authGuard(to,from,next){
    if(localStorage.getItem('token')===null){
        next('/users/login');
    }else{
        next();
    }
}
function anonymousGuard(to,from,next){
    if(localStorage.getItem('token')!==null){
        next('/home');
    }else{
        next();
    }
}


const routes=[
    {
        path:'/', component:AppStart,
        beforeEnter:anonymousGuard
        
    },
    {
        path:'/home', component:()=>import('@/components/article/ArticlesAll.vue'),
        beforeEnter:authGuard
       },
    {path:'/users', component:AppAuth, children:[
        {
            path:'register', component:()=>import('@/components/auth/Register.vue'),
            beforeEnter: anonymousGuard
        },
        {
            path:'login', component:()=>import('@/components/auth/Login.vue'),
            beforeEnter: anonymousGuard
            
        }
    ]},
    {path:'/articles',  component:AppArticlesInit, children:[
        {
            path:'all',component:()=>import('@/components/article/ArticlesAll.vue'),
            beforeEnter: authGuard
        },
        {
            path:'my-articles',component:()=>import('@/components/article/ArticlesMine.vue'),
            beforeEnter: authGuard
        },
        {
            path:'create',component:()=>import('@/components/article/ArticleCreate.vue'),
            beforeEnter: authGuard
        },
        {
            path:'details/:id', name:'articleDetails',component:()=>import('@/components/article/ArticleDetails.vue'),
            beforeEnter:authGuard
        },
        {
            path:'edit/:id',name:'articleEdit',component:()=>import('@/components/article/ArticleEdit.vue'),
            beforeEnter: authGuard
        }
        ]
    },
    {
        path:'*', component:()=>import('@/components/NotFound.vue')
    }  
]

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes
});