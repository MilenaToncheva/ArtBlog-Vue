 <template>
  <div id="app"  >
   <app-header v-on:onAuth="isAuthenticated=$event" v-bind:isAuthenticated="isAuthenticated" v-bind:email="email" > 
   </app-header>
  <router-view   v-on:onAuth="isAuthenticated=$event" 
  v-bind:isAuthenticated="isAuthenticated" 
   v-bind:email="email"
   v-bind:image="image"
   ></router-view>
   <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/core/Header.vue';
import AppFooter from './components/core/Footer.vue';

export default {
  name: 'App',
 
   data:function(){
     return{
       isAuthenticated:localStorage.getItem('token')!==null,
       email:localStorage.getItem('email'),
       image:{backgroundImage:
       "url(https://images.pexels.com/photos/3057821/pexels-photo-3057821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
      }
       
     }  
   },
  components: {
    AppHeader,
    AppFooter
    
  }  
}

</script>

<style >

.err{
  color:red
}
form{
    margin-top:60px;
    background-color:white;

}

.background-image{
  margin-top:60px;
  height: 645px;
  
}
h1{

  text-align: center;
}

</style>

