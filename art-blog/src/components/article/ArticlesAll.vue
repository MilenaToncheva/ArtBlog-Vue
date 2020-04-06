<template>
  
  <div id="allArticles">
    <h1>All articles</h1>
    <app-articles v-bind:myArticles="myArticles"></app-articles>
  </div> 
  
</template>

<script>
import AppArticles from '@/components/article/Articles.vue';


export default {
name:'AppArticlesAll',
data(){
  return{
    myArticles:false,

  }
},
components:{
AppArticles
}
       
}
</script>

<style scoped>
#allArticles{
  margin:90px 0px 50px 0px;
  
  
}
h1{
    margin: 20px 0px 20px 0px
}
</style>