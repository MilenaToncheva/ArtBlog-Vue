<template>
<div class="background-image" v-bind:style="image">
  <form class="text-center col-md-4 offset-4 border border-light p-5"  v-on:submit.prevent="registerHandler">
    <p class="h4 mb-4">Register</p>
<!-- EMAIL -->
    <input v-model="email" name="email"  type="email" id="defaultRegisterFormEmail" class="form-control mb-4" 
    placeholder="E-mail"  v-on:blur="$v.email.$touch()">
   <template v-if="$v.email.$error">
        <div class="err" v-if="!$v.email.required">Email is required!</div>
        <div class="err" v-else-if='!$v.email.email'>Invalid email!</div>
   </template>
<!-- PASSWORD -->    
    <input v-model="password"  name="password" type="password" id="defaultRegisterFormPassword" class="form-control mb-4" 
    placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"  v-on:blur="$v.password.$touch()">
    <template v-if="$v.password.$error">
        <div class="err" v-if="!$v.password.required">Password is required!</div>  
        <div class="err" v-else-if="!$v.password.minLength">Invalid password! It should be atleast 6 symbols. </div>
    </template>  
<!-- REPASSWORD -->
   <input v-model="rePassword"  name="rePassword" type="password" id="defaultRegisterFormRePassword" class="form-control" 
    placeholder="Repeat password" aria-describedby="defaultRegisterFormPasswordHelpBlock" v-on:blur="$v.rePassword.$touch()"  >
     <template v-if="$v.rePassword.$error">
          <div v-if="!$v.rePassword.required" class="err">Repeat password is required!</div>
    <div v-else-if="!$v.rePassword.sameAs" class="err">Both passwords don't match!</div>
     </template>
<!-- Button -->
    <div class="text-center col-md-12 " >
     
       <button v-bind:disabled="$v.$invalid" class="btn btn-info btn-block my-4" type="submit">Register</button>

    </div>
<!-- link to Login -->    
    <p>
        Already Registered? <router-link to="/users/login">Login</router-link>.
    </p>
</form>
</div>
</template>



<script>

import authAxios from "@/axios-auth.js";
import {validationMixin} from 'vuelidate';
import {email, sameAs, required, minLength}from 'vuelidate/lib/validators';
export default {
name:'AppRegister',
mixins:[validationMixin],   
data(){
    return{
        email:'',
        password:'',
        rePassword:''
    }
},
props:{
    image:Object
},
methods:{
    registerHandler(){
        this.$v.$touch();
        const payload={
            email:this.email,
            password:this.password,
            returnSecureToken:true
        };

        authAxios
            .post(
                "/accounts:signUp",
                payload
                )
            .then(()=>{
                this.$router.push('/users/login');
            })
            .catch(err=>{
                console.error(err);
            })

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
    },
    rePassword:{
        required,
        sameAs:sameAs('password')
    }
}
}
</script>

<style scoped>

.background-image{
    padding-top: 30px;
}
</style>