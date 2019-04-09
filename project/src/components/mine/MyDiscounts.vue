<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL" @click="getBack">&#xe6bc;</i>
      <span>我的优惠</span>
    </div>

    <!--红包部分-->
    <div class="div1">
      <span class="a1" @click="a1" :class="{changeBgc : dis}">红包</span>
      <span class="a2" @click="a2" :class="{changeBgc : !dis}">商家代金券</span>
    </div>
      <div class="div2" v-if="dis">
        <p>有 <span>3</span> 个红包即将到期</p>
        <router-link :to="{name:'RedPacketQ'}">
          <i class="wenhao">&#xe610;</i>
          <span>红包说明</span>
        </router-link>
      </div>
      <div class="div3" v-for="item in project" v-if="dis">
        <p></p>
        <div class="d1">
          <span class="s1">¥</span>
          <span class="s2">{{item.amount}}</span>
          <p class="p1">满 {{item.sum_condition}} 元可用</p>
        </div>
        <div class="d2"></div>
        <div class="d3">
          <div class="d4">{{item.description_map.validity_delta}}</div>
          <span class="s3">{{item.name}}</span>
          <br>
          <span class="s4">{{item.end_date}}到期</span>
          <br>
          <span class="s4">限收货手机号为 {{item.phone}}</span>
        </div>
      </div>
      <p class="p2" v-if="dis">限品类: 快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
      <router-link :to="{name:'HistoricalRed'}" class="r1" v-if="dis">
        查看历史红包 <i class="jiantouR">&#xe74c;</i>
      </router-link>
      <div class="div4" v-if="dis">
        <div class="d5">
          <router-link :to="{name:'DH_Red'}">兑换红包</router-link>
        </div>
        <div class="d6">
          <router-link :to="{name:'MyRecommend'}">推荐有奖</router-link>
        </div>
      </div>

    <!--商家代金券部分-->
    <div class="div5" v-if="!dis">
      <router-link :to="{name:'VoucherQ'}">
        <i class="duihao">&#xe610;</i>
        <span>商家代金券说明</span>
      </router-link>
      <img src="../../assets/img/voucher.png" alt="">
    </div>
    <div class="div6" v-if="!dis">
      <h4>无法使用代金券</h4>
      <span>非客户端或客户端版本过低</span>
      <br>
      <button @click="download">下载或升级客户端</button>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "MyDiscounts",
      data(){
          return {
            project:[],
            dis:true,
          }
      },
      methods: {
        getBack() {
          this.$router.go(-1);
        },
        a1(){
          this.dis = true
        },
        a2(){
          this.dis = false
        },
        download(){
          this.$router.push({name:'downLoad'})
        }
      },
      created(){
          Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0').then((e,p)=>{
            this.project=e.data
            console.log(this.project)
          })
      }
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 100%;
    background-color: #EBEBEB;
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
    position: fixed;
    z-index: 2;
  }
  .jiantouL{
    float: left;
    font-size: 0.2rem;
  }
  .div1{
    width: 100%;
    height: 13%;
    padding-top: 0.4rem;
    background-color: white;
  }
  .a1{
    float: left;
    margin-left: 0.7rem;
    margin-top: 0.08rem;
    font-size: 0.17rem;
    color: black;
  }
  .a2{
    float: right;
    margin-right: 0.7rem;
    margin-top: 0.08rem;
    font-size: 0.17rem;
    color: black;
  }
  .div2>p>span{
    color: red;
  }
  .div2>p{
    float: left;
    font-size: 0.13rem;
    padding-top: 0.1rem;
    padding-left: 0.2rem;
  }
  .div2>a{
    float: right;
    padding-top: 0.1rem;
    padding-right: 0.1rem;
  }
  .div3{
    width: 92%;
    height: 17%;
    background-color: white;
    margin-top: 0.45rem;
    margin-left: 4%;
    border-radius: 0.06rem;
    margin-bottom: -0.2rem;
  }
  .div3>p{
    width: 100%;
    height: 8%;
    background-color: red;
    border-top-left-radius: 0.06rem;
    border-top-right-radius: 0.06rem;
  }
  .d1{
    float: left;
    margin-right: 0.15rem;
  }
  .d2{
    width: 1%;
    height: 60%;
    float: left;
    margin-top: 0.08rem;
    border-right: 0.02rem dotted gainsboro;
    margin-right: 0.1rem;
  }
  .s1{
    color: red;
    font-size: 0.2rem;
    margin-left: 0.08rem;
  }
  .s2{
    color: red;
    font-size: 0.38rem;
  }
  .p1{
    color: gray;
    font-size: 0.11rem;
    margin-left: 0.08rem;
  }
  .s3{
    color: gray;
    font-size: 0.2rem;
  }
  .s4{
    color: gray;
    font-size: 0.11rem;
  }
  .d4{
    float: right;
    font-size: 0.22rem;
    color: red;
    margin-right: 0.1rem;
    margin-top: 0.1rem;
  }
  .p2{
    width: 92%;
    height: 0.2rem;
    background-color: #E3E3E3;
    margin-top: 0.12rem;
    margin-left: 0.15rem;
    margin-bottom: 0.2rem;
    font-size: 0.08rem;
    padding-top: 0.04rem;
    padding-left: 0.3rem;
    color: dimgray;
    border-bottom-left-radius: 0.06rem;
    border-bottom-right-radius: 0.06rem;
  }
  .r1{
    color: dimgray;
    margin-left: 1.3rem;
  }
  .div4{
    width: 100%;
    height: 0.5rem;
    position: fixed;
    bottom: 0;
    text-align: center;
    background-color: white;
  }
  .d5{
    width: 49.5%;
    height: 100%;
    float: left;
    border-right: 0.01rem solid #DCDCDC;
    padding-top: 0.13rem;
    font-size: 0.18rem;
  }
  .d6{
    width: 49.5%;
    float: right;
    padding-top: 0.13rem;
    font-size: 0.18rem;
  }
  .d5>a, .d6>a{
    color: black;
  }
  .div5>a{
    float: right;
    padding-top: 0.1rem;
    padding-right: 0.1rem;
  }
  .div5>img{
    width: 2rem;
    margin-top: 1.3rem;
    margin-left: 0.9rem;
  }
  .div6{
    text-align: center;
  }
  .div6>span{
    color: gray;
    font-size: 0.13rem;
  }
  .div6>button{
    background-color: #32CD32;
    color: white;
    width: 45%;
    height: 0.35rem;
    margin-top: 0.1rem;
    font-size: 0.18rem;
    border-radius: 0.04rem;
  }
  .changeBgc{
    color: #008de1;
    border-bottom: 0.02rem solid #008de1;
  }
</style>
