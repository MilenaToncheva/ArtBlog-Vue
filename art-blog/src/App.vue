<template>
  <div id="app"  >
   <app-header></app-header>
  <router-view  v-bind:image="image"></router-view>
   <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/core/Header.vue';
import AppFooter from './components/core/Footer.vue';

export default {
  name: 'App',
  
  components: {
    AppHeader,
    AppFooter
    
  },
  data(){
    return{
    image:{
      backgroundImage:"url(https://images.pexels.com/photos/3057821/pexels-photo-3057821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
      },
    articles:null
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

