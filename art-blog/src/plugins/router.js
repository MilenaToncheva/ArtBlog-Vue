import Vue from 'vue';
import VueRouter from 'vue-router';

import AppRegister from '@/components/auth/Register.vue';
import AppLogin from '@/components/auth/Login.vue';
import AppArticlesAll from '@/components/article/ArticlesAll.vue'; 
import AppStart from '@/components/Start.vue';

const routes=[
    {path:'/users/register',component:AppRegister},
    {path:'/users/login', component:AppLogin},
   {path:'/articles/all', component:AppArticlesAll},
  { path:'/', component:AppStart}
]

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes
});