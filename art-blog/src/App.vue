<template>
  <div id="app">
   <app-header></app-header>
<router-view></router-view>
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
    
  }
}
</script>

<style >
.err{
  color:red
}
</style>

