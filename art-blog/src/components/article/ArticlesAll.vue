<template>
  
  <section class="text-center my-5">


    <h2 class="h1-responsive font-weight-bold my-5">All articles</h2>
    
    
    <div id="all-articles" class="row" v-if="articles">
  
     
      <div  class="col-lg-4 col-md-12 mb-lg-0 mb-4" v-for="article in articles" v-bind:key="article.id">
    
        <!-- Featured image -->
        <div id="article" class="view overlay rounded z-depth-2 mb-4 waves-light" mdbWavesEffect>
          <img class="img-fluid" v-bind:src="article.imageUrl" alt="Article Image">
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
  
        <!-- Category -->
        <a href="#!" class="pink-text">
          <h6 class="font-weight-bold mb-3"><mdb-icon far icon="map" class="pr-2"></mdb-icon>Art</h6>
        </a>
        <!-- Post title -->
    <h4 class="font-weight-bold mb-3"><strong>{{article.title}}</strong></h4>
        <!-- Post data -->
    <p>by <a class="font-weight-bold">{{article.authorName}}</a></p>
        <!-- Excerpt -->
    <p class="dark-grey-text">{{article.content|shorten}}</p>
        <!-- Read more button -->
    <router-link  mdbBtn color="pink" rounded="true" mdbWavesEffect to="/articles/details/:article.id">Read more</router-link>
  
      </div>
      <!-- Grid column -->
  
     
  
    </div>
    <!-- Grid row -->
  
  </section> 
  
</template>

<script>

export default {
name:'AppArticlesAll',
components:{},
props:{
    articles:{
        type:Array
    }
}
}
</script>

<style>

</style>