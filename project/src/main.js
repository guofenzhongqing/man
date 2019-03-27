import Vue from 'vue'
import App from './App'
import router from './router'
import {} from './assets/js/resize'
import './assets/css/reset.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import vuex from 'vuex'
Vue.use(vuex);
Vue.use(MintUI);

Vue.config.productionTip = false


const store = new vuex.Store({
  state: {
    array: []
  },
  getters: {},
  mutations: {
    history(state, payload) {
     state.array.push(payload);
     localStorage.setItem("arr", JSON.stringify(state.array));
    }
  },
  actions: {},
  modules: {}
})

new Vue({
  el: '#app',
  router, store,
  components: { App },
  template: '<App/>'
})
