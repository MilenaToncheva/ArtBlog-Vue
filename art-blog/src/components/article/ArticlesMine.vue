<template>
  <div>My Articles</div>
</template>

<script>
import ArticlesMixin from '@/mixins/articles-mixin.js';

export default {
name:'AppArticlesMine',
data(){
        return{
        
        }  
    },
   mixins:[ArticlesMixin] 
    
}
</script>

<style>

</style>