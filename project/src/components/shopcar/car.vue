<template>
    <section>
      <div class="head navbar-fixed-top">
      <i class="iconfont" @click="get">&#xe64b;</i>
      <span>确定订单</span>
      <span class="nav">
        <router-link :to="{name:'login'}">
          <span>登录</span>|<span>注册</span>
        </router-link>

        </span>
    </div>
      <div class="Address" :to="{}">
        <router-link :to="{name:'car_address'}">
          <div class="DZ">
            <i class="iconfont2">&#xe607;</i>
            <span>请添加一个收获地址</span>
            <i class="iconfont1">&#xe643;</i>
          </div>
        </router-link>
        <div class="XHX">
          <span>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </span>
        </div>
      </div>

      <div class="time">
        <div class="col-xs-1"></div>
        <div class="col-xs-4">
          <span class="s1">送达时间</span>
        </div>
        <div class="col-xs-7">
          <span>08.35</span>
          <span>预计</span>
          <span>|</span>
          <span>尽快送达</span>
          <p>蜂鸟配送</p>
        </div>
      </div>

      <div class="ZF" @click="block">
        <router-link class="col-xs-12" :to="{}">
        <span>支付方式</span>
        <span class="ZX">
          <span>在线支付</span>
          <i class="iconfont1">&#xe643;</i>
        </span>
      </router-link>
        <router-link class="col-xs-12 col" :to="{}">
          <span>红包</span>
          <span class="ZX">
          <span>暂时只在饿了么 APP 中支持</span>
        </span>
        </router-link>
      </div>

      <div class="img">
        <img src="" alt="">
        <span>演示效果</span>
      </div>

      <div class="XX">
        <div class="col-xs-12">
          <div class="col-xs-8">我问问-默认</div>
          <div class="col-xs-2">✖1</div>
          <div class="col-xs-2">￥20</div>
        </div>
        <div class="col-xs-12">
          <span class="Sl">餐盒</span> <span class="Sr">￥36112.5</span>
        </div>
        <div class="col-xs-12">
          <span class="Sl">配送费</span> <span class="Sr">￥4</span>
        </div>
        <div class="col-xs-12">
          <span class="Sl">订单￥36112.5</span> <span class="Sr SS1">待支付</span>
        </div>
        <div class="col-xs-12">
          <span class="Sr SS1">￥36136.5</span>
        </div>
      </div>

      <div class="FQ">
        <router-link class="col-xs-12" :to="{name:'car_Order'}">
          <span class="Sl">订单备注</span> <span class="Sr" v-for="item in this.$store.state.RemarksArr">{{item}},</span>
          <i class="iconfont1">&#xe643;</i>
        </router-link>
        <router-link class="col-xs-12" :to="{name:'car_FQ'}">
          <span class="Sl">发票抬头</span> <span class="Sr">不需要发票</span>
          <i class="iconfont1">&#xe643;</i>
        </router-link>
      </div>

      <div class="foot col-xs-12">
        <span class="Sl">待支付￥36112.5</span>  <span class="Sr btn">确定下单</span>
      </div>
       <transition name="lxh">
         <div class="none" v-if="sure">
           <div class="H">支付方式</div>
           <div class="col-xs-12 coll">
             <span>货到付款 (商家不支持货到付款)</span>
             <i class="iconfont9">&#xe612;</i>
           </div>
           <div class="col-xs-12 ">
             <span>在线支付</span>
             <i class="iconfont10">&#xe612;</i>
           </div>
         </div>
       </transition>

    </section>
</template>

<script>
    export default {
        name: "car",
      data(){
          return {
            sure:false
          }
      },
      methods:{
          get(){
            window.history.go(-1)
          },
        block(){
        this.sure=!this.sure
        }
      }
    }
</script>

<style scoped>
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
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.2rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float: left;
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
    height: 0.5rem;
    line-height: 0.5rem;
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
  background-color: blue;
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
    color: blue;
    font-size: 0.18rem;
    float: right;
  }
  .col-xs-7 p{
    width: 0.7rem;
    height: 0.25rem;
    background-color: blue;
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
    margin-right: 0.12rem;
  }
  .Sl{
   margin-left: 0.12rem;
  }
.XX{
  width: 100%;
  height: 2rem;
  border-top: 0.005rem solid lightgray;
}
  .SS1{
    color: red;
  }
  .FQ{
    width: 100%;
    height: 0.8rem;
    background-color: white;
    margin-top: 0.1rem;
  }
  .foot{
    width: 100%;
    height: 0.4rem;
    background-color: black;
    margin-top: 0.2rem;
    position: fixed;
    bottom: 0;
  }
  .foot span{
    font-size: 0.17rem;
    color: white;
  }
  .btn{
    background-color: darkgreen;
    float: right;
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
  .lxh-enter-active,.lxh-leave-active{
    transition: opacity 1S;
  }
  .lxh-enter,.lxh-leave-to{
    opacity: 0;
  }
</style>
