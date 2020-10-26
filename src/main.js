import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import Toasted from 'vue-toasted'

//import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Toasted)

// var config = {
//   apiKey: "AIzaSyCjYCgPgpnQePFdGQoJNRy8ccu3PER9wBA",
//   authDomain: "ecommerce-vue-1eda4.firebaseapp.com",
//   databaseURL: "https://ecommerce-vue-1eda4.firebaseio.com",
//   projectId: "ecommerce-vue-1eda4",
//   storageBucket: "ecommerce-vue-1eda4.appspot.com",
//   messagingSenderId: "596962693606"
// };

// firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
