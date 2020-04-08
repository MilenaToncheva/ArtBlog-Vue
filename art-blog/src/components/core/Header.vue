<template>
<div>
     <!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg fixed-top navbar-dark #ffe0b2 orange lighten-4">
    
  <router-link  v-if="isAuthenticated" class="navbar-brand black-text" to="/home" >ArtBlog</router-link>
   
  <router-link  v-if="!isAuthenticated" class="navbar-brand black-text" to="/" >ArtBlog</router-link>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      
    <ul class="navbar-nav mr-auto"  v-if="isAuthenticated">
      <li class="nav-item active">
        <router-link class="nav-link black-text" to="/home">Home
          <span class="sr-only">(current)</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link  class="nav-link black-text" to="/articles/my-articles" >My Articles</router-link>
      </li>
      <li class="nav-item">
        <router-link  class="nav-link black-text" to="/articles/create">Create Article</router-link>
      </li>
    </ul>
      
      
    <ul class="navbar-nav ml-auto nav-flex-icons">
        
         
         <li class="nav-item" v-if="!isAuthenticated">
           <router-link  to="/users/register" class="nav-link waves-light black-text" mdbWavesEffect>Register</router-link>
         </li>
         <li class="nav-item" v-if="!isAuthenticated">
           <router-link   to="/users/login" class="nav-link waves-light black-text" mdbWavesEffect>Login</router-link>
         </li>
            <li class="nav-item"  v-if="isAuthenticated">
               <p class="nav-link waves-light black-text"  >Welcome, {{email}} </p>
            </li>
            <li class="nav-item"  v-if="isAuthenticated">
           <a   class="nav-link waves-light black-text" mdbWavesEffect v-on:click="logout">Logout</a>
            </li>
         
         
         
    </ul>
    
  </div>
</nav>

</div>
</template>

<script>

export default {
name:'AppHeader',

data(){
  return{
   
  }
},
props:{
  isAuthenticated: Boolean,
  email:String
  
}
,
methods:{
  logout(){
    
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.isAuthenticated=false;
   
    this.$emit('onAuth',false)
    this.$toast.success('Successfully logged out!','success')
    this.$router.push('/');
  }

}
}
</script>

<style scoped>

</style>