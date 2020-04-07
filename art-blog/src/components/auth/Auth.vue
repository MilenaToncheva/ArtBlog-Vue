<template>
  <router-view v-bind:image="image" v-on:onAuth="isAuthenticated=$event"></router-view>
</template>

<script>
export default {
name:'AppAuth',
data(){
  return{
isAuthenticated:false
  }
},
props:{
    image:Object,
    
},

watch:{
  isAuthenticated(newValue){
if(newValue){
  this.$emit('onAuth',newValue);
}
  }
}
}
</script>

<style>

</style>