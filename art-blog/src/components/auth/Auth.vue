<template>
  <router-view v-bind:image="image"></router-view>
</template>

<script>
export default {
name:'AppAuth',
props:{
    image:Object
}
}
</script>

<style>

</style>