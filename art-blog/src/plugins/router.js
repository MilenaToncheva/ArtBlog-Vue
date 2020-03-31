import Vue from 'vue';
import VueRouter from 'vue-router';

import AppRegister from '@/components/auth/Register.vue';
import AppLogin from '@/components/auth/Login.vue';
import AppArticlesAll from '@/components/article/ArticlesAll.vue'; 
import AppArticlesMine from '@/components/article/ArticlesMine.vue';
import AppArticleCreate from '@/components/article/ArticleCreate.vue';
import AppStart from '@/components/Start.vue';
import AppNotFound from '@/components/NotFound.vue';

const routes=[
    {path:'/users/register',component:AppRegister},
    {path:'/users/login', component:AppLogin},
   {path:'/articles/all', component:AppArticlesAll},
   {path:'/articles/my-articles',component:AppArticlesMine},
   {path:'/articles/create',component:AppArticleCreate},
   {path:'/home', component:AppArticlesAll},
  { path:'/', component:AppStart},
  {path:'**',component:AppNotFound}
]

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes
});