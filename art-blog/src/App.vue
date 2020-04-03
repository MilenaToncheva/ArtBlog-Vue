<template>
  <div id="app"  >
   <app-header v-on:onAuth="isAuthenticated=$event" v-bind:isAuthenticated="isAuthenticated" v-bind:email="email"></app-header>
  <router-view   v-on:onAuth="isAuthenticated=$event" v-bind:isAuthenticated="isAuthenticated"  ></router-view>
   <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/core/Header.vue';
import AppFooter from './components/core/Footer.vue';

export default {
  name: 'App',
   data:function(){
     return{
       isAuthenticated:localStorage.getItem('token')!==null,
       email:localStorage.getItem('email')
       
     }  
   },

  components: {
    AppHeader,
    AppFooter
    
  },
  
 
methods:{
  addArticle(article){
    //todo and replace
    this.articles.push(article);
  }
  },
  computed:{     
    
    selectedArticle(id){
return this.articles.filter(a=>a.id===id);
    }

  }
  
  
}

</script>

<style >
.err{
  color:red
}
form{
    background-color:white;
}

</style>

