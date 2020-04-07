<template>
<div>
  <div id="all-articles" class="row" v-if="articles.length>0">
  
      <div id="article" class="col-lg-4 col-md-12 mb-lg-0 mb-4" v-for="article in articles" v-bind:key="article.articleId">
    
        <!-- Image URL -->
        <div id="articleImg" class="view overlay rounded z-depth-2 mb-4 waves-light" mdbWavesEffect>
          <img class="img-fluid" v-bind:src="article.imageUrl" alt="Article Image">
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
  
        <!-- Category -->
        <a href="#!" class="pink-text">
          <h6 class="font-weight-bold mb-3"><mdb-icon far icon="map" class="pr-2"></mdb-icon>Art</h6>
        </a>
        <!-- Title -->
    <h4 class="font-weight-bold mb-3"><strong>{{article.title}}</strong></h4>
        <!-- Author Name-->
    <p>by <a class="font-weight-bold">{{article.authorName}}</a></p>
        <!-- Content -->
    <p class="dark-grey-text">{{article.content|shorten}}</p>
        <!-- Read more button -->
        
    <router-link  mdbBtn color="pink" rounded="true"
     mdbWavesEffect v-bind:to="{name:'articleDetails', params:{id:article.articleId}}">Read more</router-link>
      </div>      
    </div>
    <div v-if="articles.length===0">
          <h4>There are no articles yet.</h4>
        
    </div>
</div>
</template>

<script>

import ArticlesMixin from '@/mixins/articles-mixin.js';
export default {
name:'AppArticles',
mixins:[ArticlesMixin],
props:  {

   myArticles:Boolean,
    
  },
created(){
 
  if(this.myArticles){
      this.getMyArticles();
      console.log(this.articles);
  }else{
      this.getAllArticles();
       }
   // console.log(this.myArticles);
  } 

}
</script>

<style scoped>
h2 {
  margin-bottom: 28px;
}
div img{
    width: 350px;
    height:240px; 
}
h4{
    text-align: center;
}
#article{
    margin:20px 20px 20px 20px;
    text-align: center;
}

</style>