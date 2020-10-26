import Vuex from 'vuex'
import Vue from 'vue'

import products from './products'
import cart from './cart'

Vue.use(Vuex)

const store = new Vuex.Store({
    namespaced: true, // Add this here
    modules: {
        products,
        cart,
    },
    strict: process.env.NODE_ENV !== 'production'
  });
  
  export default store;

// export default new Vuex.Store({
//     namespaced:true,
//     modules: {
//         products,
//         cart,
//     },
//     strict: process.env.NODE_ENV !== 'production'
// })
