import Vue from 'vue'
import App from './App'
import router from './router'
import {} from './assets/js/resize'
import './assets/css/reset.css'
import './assets/css/Iconfont.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../node_modules/animate.css/animate.min.css'
import vuex from 'vuex'
Vue.use(vuex);
Vue.use(MintUI);
Vue.use(ElementUI);
Vue.config.productionTip = false


const store = new vuex.Store({
  state: {
    arr: [],
  },
  getters: {},
  mutations: {
    history(state, payload) {
      state.arr.push(payload);
      localStorage.setItem("history", JSON.stringify(state.arr));
    },
    toCity(state, payload) {
     localStorage.setItem("city", JSON.stringify(payload));
    },
    foodstuff(satte, payload) {
      localStorage.setItem("food", JSON.stringify(payload));
    },
    enter(statr, payload) {
      localStorage.setItem("enter", JSON.stringify(payload));
    }
  },
  actions: {},
  modules: {}
})

new Vue({
  el: '#app',
  router, store,render: h => h(App),
  components: { App },
  template: '<App/>'
})
