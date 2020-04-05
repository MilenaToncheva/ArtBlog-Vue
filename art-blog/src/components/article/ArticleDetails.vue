<template>
  
<div  id="article-details" v-if="article" >
    <div class="row" >
  
    
    <div class="col-lg-6 col-md-12 mb-lg-0 mb-4 offset-3" >
    <!-- Article Image -->
      <div class="view overlay rounded z-depth-2 mb-4 waves-light" mdbWavesEffect>
        <img class="img-fluid" v-bind:src="this.article.imageUrl" alt="Article Image">
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

    <!-- Category -->
      <a href="#!" class="pink-text">
        <h6 class="font-weight-bold mb-3"><mdb-icon far icon="map" class="pr-2"></mdb-icon>Art</h6>
      </a>
    
    
        <h4 class="font-weight-bold mb-3"><strong>{{article.title}}</strong></h4>
        <p>by <a class="font-weight-bold">{{article.authorName}}</a></p>
        <p id="content" class="dark-grey-text">{{article.content}}</p>
    

    <!--Buttons -->
        <div class="form-row mb-12" v-if="article.authorEmail===currentUserEmail">
          <div class="col btns">
            <router-link   v-bind:to="{name:'articleEdit', params:{id:id}}" class="btn btn-info btn-block my-4"  mdbBtn color="info">
              Edit</router-link>
          </div> 
          
          <div class="col btns">
            <button   class="btn btn-info btn-block my-4" type="submit" mdbBtn color="info" v-on:click="deleteArticle(id)">Delete</button>
          
          </div>
        </div>

  </div>
    
</div>

</div>

</template>

<script>

import ArticlesMixin from '@/mixins/articles-mixin.js'; 
export default {
name:'AppArticleDetails',
mixins:[ArticlesMixin],
  data(){
    return {
      id:'',
      currentUserEmail:localStorage.getItem('email')
    }
  },
  created(){
    this.id=this.$route.params.id;
    this.getArticle(this.id);
  }   
}
</script>

<style scoped>
#article-details{
  margin: 80px 0px 50px 0px;
  
}
#content{
  text-align: justify;
}
h6,h4,p{
  text-align: center;
}
img{
  
  min-height: 300px;
}
</style>