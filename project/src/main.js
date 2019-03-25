import Vue from 'vue'
import App from './App'
import router from './router'
import {} from './assets/js/resize'
import {} from './assets/css/reset.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
