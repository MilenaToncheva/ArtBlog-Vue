<template>
<div  >
    <div class="background-image" v-bind:style="image">
<form  class="text-center col-md-4 offset-4 border border-light p-5" v-on:submit.prevent="loginHandler">
    <p class="h4 mb-4">Login</p>
    <div class="form-group">
    <input v-model="email" name="email"  type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" v-on:blur="$v.email.$touch()">
    <template v-if="$v.email.$error">
    <div class="err" v-if="!$v.email.required">Email is required!</div>
    <div class="err" v-else-if="!$v.email.email">Invalid email!</div>
    </template>
    </div>
    <div class="form-group">
    <input v-model="password" name="password"  type="password" id="defaultLoginFormPassword" 
    class=" form-control mb-4" placeholder="Password" autocomplete="on" v-on:blur="$v.password.$touch()">
   <template v-if="$v.password.$error">
   <div class="err" v-if="!$v.password.required">Please enter the password!</div>
   <div class="err" v-else-if="!$v.password.minLength">Invalid password!</div>
   </template>
    </div>
   <div class="text-center col-md-12 " >
     <button v-bind:disabled="$v.$invalid" class="btn btn-info btn-block my-4" type="submit">Login</button>
   </div>
   
    <p>Not a member?
      <router-link to="/users/register">Register</router-link>
    </p>
   </form>
    </div>
   </div>
   

</template>

<script>


import AuthMixin from '@/mixins/auth-mixin.js';
import {validationMixin} from 'vuelidate';
import {required, email, minLength}from 'vuelidate/lib/validators';

export default {
    name:'AppLogin',
    mixins:[validationMixin, AuthMixin],
    data(){
        return{
                email:'',
                password:''
        }
    },
    props:{
        image:Object
    },
    methods:{
        loginHandler(){
            this.$v.$touch();
            const payload={
               email: this.email,
                password: this.password,
                 returnSecureToken: true
            };
           this.loginUser(payload);
        }
    },
    validations:{
        email:{
            required,
            email
        },
        password:{
            required,
            minLength:minLength(6)
        }
    }

}
</script>

<style scoped>

.background-image{
    padding-top: 30px;
}

</style>