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
    {path: '/myInfo', component: MyInfo, name: 'myInfo'},
    {path: '/username', component: Username, name: 'username'},
    {path: '/compile', component: Compile, name: 'compile'},
    {path: '/newSite', component: NewSite, name: 'newSite'},
    {path: '/grabble', component: Grabble, name: 'grabble'},
    {path: '/integralMall', component: IntegralMall, name: 'integralMall'},
    {path: '/vipCard', component: VipCard, name: 'vipCard'},
    {path: '/downLoad', component: DownLoad, name: 'downLoad'},
    {path: '/serve', component: Serve, name: 'serve'},
    {path: '/classify', component: Classify, name: 'classify'},
    {path: '/hot1', component: hot1, name: 'hot1'},
    {path: '/hot2', component: hot2, name: 'hot2'},
    {path: '/hot3', component: hot3, name: 'hot3'},
    {path: '/hot4', component: hot4, name: 'hot4'},
    {path: '/hot5', component: hot5, name: 'hot5'},
    {path: '/hot6', component: hot6, name: 'hot6'},
    {path: '/hot7', component: hot7, name: 'hot7'},
    {path: '/hot8', component: hot8, name: 'hot8'},
    {path: '/hot9', component: hot9, name: 'hot9'},
    {path: '/hot10', component: hot10, name: 'hot10'},
    {path: '/hot11', component: hot11, name: 'hot11'},
    {path: '/hot12', component: hot12, name: 'hot12'},
    {path: '/hot13', component: hot13, name: 'hot13'},
    {path: '/hot14', component: hot14, name: 'hot14'},
    {path: '/hot15', component: hot15, name: 'hot15'},
    {path: '/hot16', component: hot16, name: 'hot16'},
    {path: '/hot17', component: hot17, name: 'hot17'},
    {path: '/hot18', component: hot18, name: 'hot18'},
    {path: '/hot19', component: hot19, name: 'hot19'},
    {path: '/hot20', component: hot20, name: 'hot20'},
    {path: '/hot21', component: hot21, name: 'hot21'},
    {path: '/kefu', component: kefu, name: 'kefu'},
    {path: '/MyBalance', component: MyBalance, name: 'MyBalance'},
    {path: '/MyIntegral', component: MyIntegral, name: 'MyIntegral'},
    {path: '/BalanceQ', component: BalanceQ, name: 'BalanceQ'},
    {path: '/IntegralQ', component: IntegralQ, name: 'IntegralQ'},
    {path: '/VipExplain', component: VipExplain, name: 'VipExplain'},
    {path: '/Invoice', component: Invoice, name: 'Invoice'},
    {path: '/ExchangeVip', component: ExchangeVip, name: 'ExchangeVip'},
    {path: '/BuyVip', component: BuyVip, name: 'BuyVip'},
    {path: '/MyDiscounts', component: MyDiscounts, name: 'MyDiscounts'},
    {path: '/RedPacketQ', component: RedPacketQ, name: 'RedPacketQ'},
    {path: '/HistoricalRed', component: HistoricalRed, name: 'HistoricalRed'},
    {path: '/MyRecommend', component: MyRecommend, name: 'MyRecommend'},
    {path: '/DH_Red', component: DH_Red, name: 'DH_Red'},
    {path: '/VoucherQ', component: VoucherQ, name: 'VoucherQ'},

  ]
})
