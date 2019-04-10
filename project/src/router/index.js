import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Router)
Vue.use(VueAxios, axios)
import AllCity from '../components/AllCity'
import Login from '../components/Login'
import Reset from '../components/Reset'
import ToCity from '../components/ToCity'
import All from '../components/All'
import TakeOut from '../components/TakeOut'
import MyOrder from '../components/mine/MyOrder'
import Head from '../components/mine/Head'
import hot1 from '../components/mine/hot/hot1'
import hot2 from '../components/mine/hot/hot2'
import hot3 from '../components/mine/hot/hot3'
import hot4 from '../components/mine/hot/hot4'
import hot5 from '../components/mine/hot/hot5'
import hot6 from '../components/mine/hot/hot6'
import hot7 from '../components/mine/hot/hot7'
import hot8 from '../components/mine/hot/hot8'
import hot9 from '../components/mine/hot/hot9'
import hot10 from '../components/mine/hot/hot10'
import hot11 from '../components/mine/hot/hot11'
import hot12 from '../components/mine/hot/hot12'
import hot13 from '../components/mine/hot/hot13'
import hot14 from '../components/mine/hot/hot14'
import hot15 from '../components/mine/hot/hot15'
import hot16 from '../components/mine/hot/hot16'
import hot17 from '../components/mine/hot/hot17'
import hot18 from '../components/mine/hot/hot18'
import hot19 from '../components/mine/hot/hot19'
import hot20 from '../components/mine/hot/hot20'
import hot21 from '../components/mine/hot/hot21'
import Serve from '../components/mine/Serve'
import VipCard from '../components/mine/VipCard'
import DownLoad from '../components/mine/DownLoad'
import IntegralMall from '../components/mine/IntegralMall'
import Classify from '../components/Classify'
import Search from '../components/Search'
import BalanceQ from '../components/mine/BalanceQ'
import IntegralQ from '../components/mine/IntegralQ'
import MyBalance from '../components/mine/MyBalance'
import MyIntegral from '../components/mine/MyIntegral'
import kefu from '../components/mine/hot/kefu'
import VipExplain from '../components/mine/vip/VipExplain'
import Invoice from '../components/mine/vip/Invoice'
import ExchangeVip from '../components/mine/vip/ExchangeVip'
import BuyVip from '../components/mine/vip/BuyVip'
import MyInfo from '../components/mine/information/MyInfo'
import Username from '../components/mine/information/Username'
import Compile from '../components/mine/information/Compile'
import NewSite from '../components/mine/information/NewSite'
import Grabble from '../components/mine/information/Grabble'
import MyDiscounts from '../components/mine/MyDiscounts'
import RedPacketQ from '../components/mine/RedPacket/RedPacketQ'
import HistoricalRed from '../components/mine/RedPacket/HistoricalRed'
import DH_Red from '../components/mine/RedPacket/DH_Red'
import MyRecommend from '../components/mine/RedPacket/MyRecommend'
import VoucherQ from '../components/mine/RedPacket/VoucherQ'
import Store from '../components/Store'
import Commodity from '../components/Commodity'
import Evaluation from '../components/Evaluation'
import Car from '../components/shopCar/car'
import car_address from '../components/shopCar/car_address'
import car_DZ from '../components/shopCar/car_DZ'
import car_FQ from '../components/shopCar/car_FQ'
import car_TJ from '../components/shopCar/car_TJ'
import StoreDetails from '../components/StoreDetails'
import ShopSafe from '../components/ShopSafe'
import car_Order from '../components/shopCar/car_Order'
import goodDetails from '../components/goodDetails'

export default new Router({
  routes: [
    {path:'/', redirect: '/allCity'},
    {path: '/allCity', component: AllCity},
    {path: '/login', component: Login},
    {path: '/reset', component: Reset},
    {path: '/toCity', component: ToCity},
    {path: '/all', component: All, children: [
        {path: '/', redirect: 'takeout'},
        {path: 'takeout', component: TakeOut},
        {path: 'search', component: Search},
        {path: 'myOrder', component: MyOrder, name: 'myOrder'},
        {path: 'head', component: Head},
      ]},
    {path: '/store', component: Store, name: 'store',redirect: '/store/commodity', children: [
        {path: 'commodity', component: Commodity, name: 'commodity'},
        {path: 'evaluation', component: Evaluation, name: 'evaluation'}
      ]},
    {path: '/all/head/myInfo', component: MyInfo, name: 'myInfo'},
    {path: '/all/head/myInfo/username', component: Username, name: 'username'},
    {path: '/all/head/myInfo/compile', component: Compile, name: 'compile'},
    {path: '/all/head/myInfo/compile/newSite', component: NewSite, name: 'newSite'},
    {path: '/all/head/myInfo/compile/newSite/grabble', component: Grabble, name: 'grabble'},
    {path: '/all/head/integralMall', component: IntegralMall, name: 'integralMall'},
    {path: '/all/head/vipCard', component: VipCard, name: 'vipCard'},
    {path: '/all/head/downLoad', component: DownLoad, name: 'downLoad'},
    {path: '/all/head/serve', component: Serve, name: 'serve'},
    {path: '/all/takeout/classify', component: Classify, name: 'classify'},
    {path: '/all/head/serve/hot1', component: hot1, name: 'hot1'},
    {path: '/all/head/serve/hot2', component: hot2, name: 'hot2'},
    {path: '/all/head/serve/hot3', component: hot3, name: 'hot3'},
    {path: '/all/head/serve/hot4', component: hot4, name: 'hot4'},
    {path: '/all/head/serve/hot5', component: hot5, name: 'hot5'},
    {path: '/all/head/serve/hot6', component: hot6, name: 'hot6'},
    {path: '/all/head/serve/hot7', component: hot7, name: 'hot7'},
    {path: '/all/head/serve/hot8', component: hot8, name: 'hot8'},
    {path: '/all/head/serve/hot9', component: hot9, name: 'hot9'},
    {path: '/all/head/serve/hot10', component: hot10, name: 'hot10'},
    {path: '/all/head/serve/hot11', component: hot11, name: 'hot11'},
    {path: '/all/head/serve/hot12', component: hot12, name: 'hot12'},
    {path: '/all/head/serve/hot13', component: hot13, name: 'hot13'},
    {path: '/all/head/serve/hot14', component: hot14, name: 'hot14'},
    {path: '/all/head/serve/hot15', component: hot15, name: 'hot15'},
    {path: '/all/head/serve/hot16', component: hot16, name: 'hot16'},
    {path: '/all/head/serve/hot17', component: hot17, name: 'hot17'},
    {path: '/all/head/serve/hot18', component: hot18, name: 'hot18'},
    {path: '/all/head/serve/hot19', component: hot19, name: 'hot19'},
    {path: '/all/head/serve/hot20', component: hot20, name: 'hot20'},
    {path: '/all/head/serve/hot21', component: hot21, name: 'hot21'},
    {path: '/all/head/serve/kefu', component: kefu, name: 'kefu'},
    {path: '/all/head/MyBalance', component: MyBalance, name: 'MyBalance'},
    {path: '/all/head/MyIntegral', component: MyIntegral, name: 'MyIntegral'},
    {path: '/all/head/MyBalance/BalanceQ', component: BalanceQ, name: 'BalanceQ'},
    {path: '/all/head/MyIntegral/IntegralQ', component: IntegralQ, name: 'IntegralQ'},
    {path: '/all/head/vipCard/VipExplain', component: VipExplain, name: 'VipExplain'},
    {path: '/all/head/vipCard/Invoice', component: Invoice, name: 'Invoice'},
    {path: '/all/head/vipCard/ExchangeVip', component: ExchangeVip, name: 'ExchangeVip'},
    {path: '/BuyVip', component: BuyVip, name: 'BuyVip'},
    {path: '/all/head/MyDiscounts', component: MyDiscounts, name: 'MyDiscounts'},
    {path: '/all/head/MyDiscounts/RedPacketQ', component: RedPacketQ, name: 'RedPacketQ'},
    {path: '/all/head/MyDiscounts/HistoricalRed', component: HistoricalRed, name: 'HistoricalRed'},
    {path: '/all/head/MyDiscounts/MyRecommend', component: MyRecommend, name: 'MyRecommend'},
    {path: '/all/head/MyDiscounts/DH_Red', component: DH_Red, name: 'DH_Red'},
    {path: '/all/head/MyDiscounts/VoucherQ', component: VoucherQ, name: 'VoucherQ'},
    {path: '/car', component: Car, name: 'car'},
    {path: '/car_address', component: car_address, name: 'car_address'},
    {path: '/car_tj', component: car_TJ, name: 'car_tj'},
    {path: '/car_fq', component: car_FQ, name: 'car_fq'},
    {path: '/car_dz', component: car_DZ, name: 'car_dz'},
    {path: '/StoreDetails', component: StoreDetails, name: 'StoreDetails'},
    {path: '/ShopSafe', component: ShopSafe, name: 'ShopSafe'},
    {path: '/car_Order', component: car_Order, name: 'car_Order'},
    {path: '/car_FQ', component: car_FQ, name: 'car_FQ'},
    {path: '/goodDetails', component: goodDetails, name: 'goodDetails'},
  ]
})
