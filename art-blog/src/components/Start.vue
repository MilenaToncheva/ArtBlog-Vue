<template>
<div id="start" class="text-center background-image" v-bind:style="image" >
     <!--HEADING-->
    <h1 class="h1 py-5 font-weight-bold">Welcome to MT ArtBlog</h1>
    <!--DESCRIPTION-->
    <p class="px-5 mb-5 pb-3 lead black-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam.</p>
<p> Please <router-link to="/users/login">login</router-link> to gain access to our articles</p>
<p>If you don't have an account, <router-link to="/users/register">click</router-link> here to Register</p>
</div>

</template>

<script>
export default {
name:'AppStart',
data(){
  return{

   }
  },
  props:{
    image:Object
  },
// beforeCreate() {
//   this.$emit('onAuth', localStorage.getItem('token') !== null);
// },
  }


</script>

<style scoped>

.background-image{
  margin-top:60px;
  height: 645px;
  filter: brightness(1.14) 
}
</style>