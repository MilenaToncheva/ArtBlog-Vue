import Vue from 'vue';
import App from './App.vue';

import Vuelidate from 'vuelidate';
import  router from './plugins/router.js';

import VueToast from 'vue-toast-notification';
//import 'vue-toast-notification/dist/theme-default.css'
import 'vue-toast-notification/dist/theme-sugar.css';

import * as mdbvue from 'mdbvue';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueToast, {position:'top-right',duration:4000});

Vue.filter('shorten',function(value){
  return value.substr(0,10)+"...";
})


for(const component in mdbvue){
  Vue.component(component,mdbvue[component]);
}
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
