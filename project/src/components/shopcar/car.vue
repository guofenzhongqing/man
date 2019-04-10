<template>
    <section @click="shiying">
      <div class="margin">
        <div class="head navbar-fixed-top">
          <i class="jiantouL" @click="get">&#xe6bc;</i>
          <span>确定订单</span>
          <span class="nav">
        <router-link :to="{path: '/login'}" class="pull-right navRight" v-if="isTrue2" style="font-size: 0.18rem;color: white;">登录|注册</router-link>
        <router-link :to="{path: '/all/head'}" class="pull-right navRight" v-if="!isTrue2" style="font-size: 0.18rem;color: white;"><span class="jiantouL">&#xe663;</span></router-link>
        </span>
        </div>
        <div class="Address" style="margin-top: 0.45rem">
          <div @click="$router.push({name:'car_address'})">
            <div class="DZ">
              <i class="iconfont2">&#xe603;</i>
              <div class="li" v-if="addressMsg">
                <p class="name">
                  <span>{{addressMsg.name}}</span>
                  <span style="font-size: 0.14rem">{{addressMsg.sex == 2 ? '女士': '先生'}}</span>
                  <span style="font-size: 0.14rem">{{addressMsg.phone}}</span>
                </p>
                <p class="tag">
                  <span :class="{colorBlue: addressMsg.tag=='学校', colorRed:addressMsg.tag == '家', colorGreen: addressMsg.tag== '公司'}" style="font-size: 0.14rem">{{addressMsg.tag}}</span>
                  <span style="font-size: 0.14rem">{{addressMsg.address_detail}}</span>
                </p>
              </div>
              <span v-if="!addressMsg">请添加一个收货地址</span>
              <i class="iconfont1">&#xe74c;</i>
            </div>
          </div>
          <div class="XHX">
            <span>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </span>
          </div>
        </div>

        <div class="time">
          <div style="width: 0.1rem; height: 100%; background-color: #008de1; float: left"></div>
          <div class="col-xs-4">
            <span class="s1">送达时间</span>
          </div>
          <div class="col-xs-7" style="position: relative">
            <span>{{this.sendTime}}</span>
            <span style="position: absolute;top: 0.1rem;left: 1.3rem;">预计</span>
            <span style="position: absolute;top: 0.1rem;left: 0.4rem;">尽快送达 |</span>
            <p style="position: absolute;top: 0.4rem; right: 0.15rem">{{goods.delivery_mode.text}}</p>
          </div>
        </div>

        <div class="ZF" @click.stop="block">
          <router-link class="col-xs-12" :to="{}" style="color: gray;">
            <span style="color: black;">支付方式</span>
            <span class="ZX">
          <span>在线支付</span>
          <i class="iconfont1" style="font-size: 0.15rem">&#xe74c;</i>
        </span>
          </router-link>
          <router-link class="col-xs-12 col" :to="{}" style="color: gray;">
            <span>红包</span>
            <span class="ZX">
          <span>暂时只在饿了么 APP 中支持</span>
        </span>
          </router-link>
        </div>

        <div class="img">
          <img :src="http + goods.image_path" class="img1">
          <span>{{goods.name}}</span>
        </div>

        <div class="XX" v-for="item in shopCar">
          <div class="col-xs-12">
            <div class="col-xs-8">{{item.shop.name}}</div>
            <div class="col-xs-2" style="color: red;">✖{{item.num}}</div>
            <div class="col-xs-2">￥{{item.shop.specfoods[0].price}}</div>
          </div>
          <div class="col-xs-12">
            <span class="Sl">餐盒</span> <span class="Sr">￥{{item.shop.specfoods[0].packing_fee}}</span>
          </div>
          <div class="col-xs-12">
            <span class="Sl">配送费</span> <span class="Sr">￥{{goods.float_delivery_fee}}</span>
          </div>
        </div>
        <div>
          <div class="col-xs-12">
            <span class="Sl">订单￥{{mycarshoppic}}</span> <span class="Sr SS1">待支付</span>
          </div>
          <div class="col-xs-12">
            <span class="Sr SS1">￥{{mycarshoppic}}</span>
          </div>
        </div>

        <div class="FQ">
          <router-link class="col-xs-12" :to="{name:'car_Order'}">
            <span class="Sl" style="color: gray;">订单备注</span> <span class="Sr" v-for="item in remark">{{item}},</span>
            <i class="iconfont1" style="margin-right: 0.1rem;color: gray;float: right;margin-right: -0.06rem">&#xe74c;</i>
            <span style="color: gray;float: right;">口味、偏好等</span>
          </router-link>
          <router-link class="col-xs-12" :to="{name:'car_FQ'}">
            <span class="Sl" style="color: gray;">发票抬头</span>
            <span class="Sr" style="color: gray;">不需要发票
              <i class="pin">&#xe74c;</i>
            </span>
          </router-link>
        </div>
      </div>


      <div class="foot col-xs-12">
        <span class="Sl">待支付￥{{mycarshoppic}}</span>  <span class="Sr btn" @click="payMoney">确定下单</span>
      </div>
       <transition name="lxh">
         <div class="none" v-if="sure">
           <div class="H">支付方式</div>
           <div class="col-xs-12 coll">
             <span>货到付款 (商家不支持货到付款)</span>
             <i class="iconfont9">&#xe65c;</i>
           </div>
           <div class="col-xs-12 ">
             <span>在线支付</span>
             <i class="iconfont10" @click="xiala">&#xe65c;</i>
           </div>
         </div>
       </transition>
      <XBT v-if="animation"></XBT>
    </section>
</template>

<script>
  import Vue from 'vue';
  import XBT from "../XBT";
    export default {
        name: "car",
      components: {XBT},
      data(){
          return {
            sure:false,
            animation:false,
            userId:'',// 用户id
            addressArr:[],//地址列表信息
            shopCar:this.$store.state.shopCar,// 购物车信息
            goods:JSON.parse(localStorage.getItem('storeObj')),// 店家信息
            sendTime:'',// 送达时间
            http: 'https://elm.cangdu.org/img/',
            remark:[],//备注信息
            isTrue2:true,
            addressMsg:this.$store.state.address
          }
      },
      created(){
          // this.animation = true;
          this.userId = JSON.parse(localStorage.getItem('success')).id
        // 发起请求获取收货地址列表
        Vue.axios.get('https://elm.cangdu.org/v1/users/'+ this.userId + '/addresses').then(res => {
          this.animation = false;
          this.addressArr = res.data
        })
        this.remark = this.$store.state.RemarksArr

      },
      mounted(){
          // 判断送达时间
        let d = new Date();
        let h = d.getHours();// 小时
        let m = d.getMinutes();// 分钟
        let minutes = Number(m) + parseInt(this.goods.order_lead_time)
        if (minutes >= 60){
          minutes = minutes - 60;
          h++;
        }
        this.sendTime = Number(h) + ':' + minutes;

        // 判断是否登录
        if (localStorage.getItem('success')){
          this.isTrue2 = false
        } else{
          this.isTrue2 = true
        }
      },
      methods:{
          get(){
            window.history.go(-1)
          },
        block(){
        this.sure=!this.sure
        },
        payMoney(){
            this.$router.push({name:'BuyVip'});
        },
        xiala() {
            this.sure = !this.sure;
        },
        shiying() {
            this.sure = false;
        }
      },
      computed:{
        //计算商品价格(商品只有一个种类)
        mycarshoppic(){
          var num=0;
          if(this.shopCar.length){
            for(var i=0;i<this.shopCar.length;i++){
              num+=(this.shopCar[i].shop.specfoods[0].price*this.shopCar[i].num + this.shopCar[i].shop.specfoods[0].packing_fee + this.goods.float_delivery_fee);
            }
          }
          return num;
        },
      }
    }
</script>

<style scoped>
  section {
    width: 100%;
    height: 100%;
    background-color: #E5E4E4;
    padding-bottom: 1rem;
  }
  .glyphicon-user{
    color: white;
    font-size: 0.25rem;
  }
  .head{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #008de1;
    color: white;
    font-size: 0.2rem;
    text-align: center;
    overflow: hidden;
  }
  .jiantouL{
    font-family:"iconfont" !important;
    font-size:0.2rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float: left;
    margin-right: 0.1rem;
  }
  .iconfont2{
    font-family:"iconfont" !important;
    font-size:0.2rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .iconfont10{
     font-family:"iconfont" !important;
     font-size:0.2rem;font-style:normal;
     -webkit-font-smoothing: antialiased;
     -webkit-text-stroke-width: 0.2px;
     -moz-osx-font-smoothing: grayscale;
     color: darkgreen;
     float: right;
   }
  .iconfont9{
    font-family:"iconfont" !important;
    font-size:0.2rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: lightgray;
    float: right;
  }
  .iconfont1{
    font-family:"iconfont" !important;
    font-size:0.2rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float:right;
  }
  .nav{
    float: right;
  }
  .Address{
    width: 100%;
    height: 1rem;
    background-color: snow;
     margin-top: 0.4rem;
  }
  .Address span{
    font-size: 0.20rem;
  }
  .DZ{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .XHX span{
    color: blueviolet;
  }
  .time{
    width: 100%;
    height: 0.8rem;
    background-color: white;
  }
.col-xs-1{
  height: 100%;
  background-color: #008de1;
}
  .col-xs-4{
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .col-xs-4 span{
    font-size: 0.22rem;
  }
  .col-xs-7 span{
    color: #008de1;
    font-size: 0.18rem;
    float: right;
  }
  .col-xs-7 p{
    width: 0.7rem;
    height: 0.25rem;
    background-color: #008de1;
    color: white;
    float: right;
    text-align: center;
    line-height: 0.25rem;
    border-radius: 0.1rem;
  }
  .ZX{

    float: right;
  }
  .col-xs-12{
    background-color: white;
   height: 0.4rem;
    line-height: 0.4rem;
  }
  .col{
    border-top: 0.005rem solid lightgray;
  }
  .ZF{
    height: 0.8rem;
    margin-top: 0.1rem;
  }
  .img{
    width: 100%;
    height: 0.4rem;
    background-color: white;
    margin-top: 0.1rem;
    line-height: 0.4rem;
  }
  .img span{
    font-size: 0.17rem;
  }
  .Sr{
    float: right;
  }
  .Sl{
   margin-left: 0.12rem;
  }
.XX{
  width: 100%;
  border-top: 0.005rem solid lightgray;
  border-bottom: 0.01rem solid lightgray;
}
  .SS1{
    color: red;
  }
  .FQ{
    width: 100%;
    height: 4.5rem;
    background-color: white;
    margin-top: 0.1rem;
  }
  .FQ>a {
    display: block;
  }
  .FQ>a+a {
    margin-bottom: 0.5rem;
  }
  .foot{
    width: 100%;
    height: 0.4rem;
    background-color: black;
    /*margin-top: 0.2rem;*/
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .foot span{
    font-size: 0.17rem;
    color: white;
  }
  .btn{
    background-color: limegreen;
    float: right;
    margin-right: -0.15rem;
  }
  .none{
    width: 100%;
    height: 2.2rem;
    background-color: white;
    position: fixed;
    bottom: 0;
    z-index: 3;
  }
  .H{
    height: 0.4rem;
    text-align: center;
    font-size: 0.17rem;
    background-color: lightgray;
    line-height: 0.4rem;
  }
  .coll span{
    color: lightgray;
  }
  .img1{
    width: 0.4rem;
    height: 0.4rem;
    margin: 0 0.1rem;
  }
  .lxh-enter-active,.lxh-leave-active{
    transition: height 0.8s;
  }
  .lxh-enter,.lxh-leave-to{
    height: 0;
  }
.li{
  width: 70%;
}
  .name, .tag{
    width: 75%;
    margin: 0;
    padding: 0;
    font-size: 0.12rem;
  }
  .name span:nth-child(1){
    font-size: 0.18rem;
    font-weight: bold;
  }
  .tag span:nth-child(1){
    color: white;
    padding: 0.03rem;
    border-radius: 0.03rem;
  }
  .tag span:nth-child(2){
    color: gray;
  }
  .colorblue{
    background-color: #3190E8;
  }
  .colorRed{
    background-color: red;
  }
  .colorGreen{
    background-color: rgb(92,184,92);
  }
</style>
