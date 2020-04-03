<template>
  
<div  id="article-details" v-if="selectedArticle">
    <div class="row" >
  
    
    <div class="col-lg-4 col-md-12 mb-lg-0 mb-4 offset-4" >
    <!-- Article Image -->
      <div class="view overlay rounded z-depth-2 mb-4 waves-light" mdbWavesEffect>
        <img class="img-fluid" v-bind:src="selectedArticle.imageUrl" alt="Article Image">
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

    <!-- Category -->
      <a href="#!" class="pink-text">
        <h6 class="font-weight-bold mb-3"><mdb-icon far icon="map" class="pr-2"></mdb-icon>Art</h6>
      </a>
        <h4 class="font-weight-bold mb-3"><strong>{{selectedArticle.title}}</strong></h4>
        <p>by <a class="font-weight-bold">{{selectedArticle.authorName}}</a></p>
        <p class="dark-grey-text">{{selectedArticle.content}}</p>
    <!--Buttons -->
        <div class="form-row mb-12" v-If="selectedArticle|canEditAndDelete">
          <div class="col btns">
            <router-link   v-bind:to="{name:'articleEdit', params:{id:selectedArticle.id}}" class="col-sd-6 form-control"   mdbBtn color="info">
              Edit</router-link>
          </div>
          
          <div class="col btns">
            <button  class="col-sd-6 form-control "  type="submit" mdbBtn color="info" v-on:click="deleteArticle()">Delete</button>
          </div>
        </div>

  </div>
    
</div>

</div>

</template>

<script>
export default {
name:'AppArticleDetails',
props:{
    
    articles:Array
},
created(){
    
   this.selectedArticle; 
    
   

},
methods:{
    deleteArticle(){
        //todo
        },
    },
    computed:{
        selectedArticle(){
          return  this.articles.filter(a=>a.id===this.$route.params.id)[0];
        }
    }
}
</script>

<style>

</style>