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
    array: [],
    history: []
  },
  getters: {},
  mutations: {
    // 存的搜索城市的历史
    history(state, payload) {
      state.arr.push(payload);
      localStorage.setItem("history", JSON.stringify(state.arr));
    },
    // 存储城市的对象
    toCity(state, payload) {
     localStorage.setItem("city", JSON.stringify(payload));
    },
    // 搜索商铺的历史
    foodstuff(satte, payload) {
      localStorage.setItem("food", JSON.stringify(payload));
    },
    // 存的用户名
    message(statr, payload) {
      localStorage.setItem("enter", JSON.stringify(payload));
    },
    // 存储城市的id
    cityId(state, payload) {
      localStorage.setItem("id", payload);
    },
    // 存储送货地址
    delivery(state, payload) {
       localStorage.setItem("location", JSON.stringify(payload));
    },
    // 存储商铺历史
    shopping(state, payload) {
      state.history.push(payload)
      localStorage.setItem("shop", JSON.stringify(state.history));
    },
    // 存储商品信息
    information(state, payload) {
      localStorage.setItem("storeObj" ,JSON.stringify(payload));
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
