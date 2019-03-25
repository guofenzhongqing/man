import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Router)
Vue.use(VueAxios, axios)
import AllCity from '../components/AllCity'
import Login from '../components/Login'
import Reset from '../components/Reset'

export default new Router({
  routes: [
    {path:'/', redirect: '/allCity'},
    {path: '/allCity', component: AllCity},
    {path: '/login', component: Login},
    {path: '/reset', component: Reset}
  ]
})
