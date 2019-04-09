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
import $ from 'jquery'
import vuex from 'vuex'
Vue.use(vuex);
Vue.use(MintUI);
Vue.use(ElementUI);
Vue.config.productionTip = false


const store = new vuex.Store({
  state: {
    shopCar: [],
    address: []
  },
  getters: {},
  mutations: {
    // 存储城市的对象
    toCity(state, payload) {
     localStorage.setItem("city", JSON.stringify(payload));
    },
    // 搜索商铺的历史
    foodstuff(satte, payload) {
      localStorage.setItem("food", JSON.stringify(payload));
    },
    // 存储城市的id
    cityId(state, payload) {
      localStorage.setItem("id", payload);
    },
    // 存储送货地址
    delivery(state, payload) {
       localStorage.setItem("location", JSON.stringify(payload));
    },
    // 存储商铺信息
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
