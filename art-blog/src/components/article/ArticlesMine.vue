<template>
<div id="myArticles">
  <h1>My Articles</h1>
  <app-articles v-bind:myArticles="myArticles"></app-articles>
</div>
</template>

<script>

import AppArticles from '@/components/article/Articles.vue';
export default {
name:'AppArticlesMine',
data(){
    return{
             myArticles:true
        }  
    },
    components:{
        AppArticles
    }    
}
</script>

<style scoped>
#myArticles{
    margin:90px 0px 50px 0px;
}
h1{
    margin: 90px 0px 20px 0px
}
</style>