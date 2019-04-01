<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL" @click="getBack">&#xe6bc;</i>
      <span>在线支付</span>
    </div>
    <div class="d1">
      <p>支付剩余时间</p>
      <span>00 : {{minute}} : {{second}}</span>
    </div>
    <div class="d2">
      <span>选择支付方式</span>
    </div>
    <div class="d3">
      <img src="../../../assets/img/zhifubao.png">
      <span>支付宝</span>
      <i class="duigou" @click="zhifubao" :class="{changeBgc:duigou}">&#xe65c;</i>
    </div>
    <div class="d4">
      <img src="../../../assets/img/weixin.png">
      <span>微信</span>
      <i class="duigou" @click="weixin" :class="{changeBgc:!duigou}">&#xe65c;</i>
    </div>
      <button @click="buy">确认支付</button>
    <div class="dis"  v-if="!show">
      <div class="topT">
        <i class="gth">&#xe60d;</i>
        <p>暂不开放支付功能</p >
      </div>
      <button class="btn1" @click="none">确定</button>
    </div>
    <div class="dis"  v-if="!noshow">
      <div class="topT">
        <i class="gth">&#xe60d;</i>
        <p>当前环境无法支付,请打开官方APP进行付款</p >
      </div>
      <button class="btn2" @click="yes">确定</button>
    </div>
  </section>
</template>

<script>
    export default {
        name: "BuyVip",
      data(){
          return{
            minutes: 15,
            seconds: 0,
            hour:0,
            show:false,
            noshow:true,
            duigou:true
          };
      },
      mounted(){
          this.add();
      },
      methods: {
        getBack() {
          this.$router.go(-1);
        },
        block(){
          this.show = false
        },
        none(){
          this.show = true
        },
        buy(){
          this.noshow = false
        },
        yes(){
            this.$router.push({name:'myOrder'})
        },
        zhifubao(){
          this.duigou = !this.duigou
        },
        weixin(){
          this.duigou = !this.duigou
        },
        // 倒计时
        num: function(n) {
          return n < 10 ? "0" + n : "" + n;
        },
        add: function() {
          let _this = this;
          let time = window.setInterval(function() {
            if (_this.seconds === 0 && _this.minutes !== 0) {
              _this.seconds = 59;
              _this.minutes -= 1;
            } else if (_this.minutes === 0 && _this.seconds === 0) {
              _this.seconds = 0;
              window.clearInterval(time);
            } else {
              _this.seconds -= 1;
            }
          }, 1000);
        },
      },
      watch: {
        second: {
          handler(newVal) {
            this.num(newVal);
          }
        },
        minute: {
          handler(newVal) {
            this.num(newVal);
          }
        }
      },
      computed: {
        second: function() {
          return this.num(this.seconds);
        },
        minute: function() {
          return this.num(this.minutes);
        }
      }
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 100%;
    background-color: gainsboro;
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
  .d1{
    width: 100%;
    padding-top: 0.5rem;
    text-align: center;
    padding-bottom: 0.4rem;
    background-color: white;
  }
  .d1>p{
    margin-top: 0.4rem;
    font-size: 0.18rem;
  }
  .d1>span{
    font-size: 0.45rem;
  }
  .d2{
    width: 100%;
    background-color: gainsboro;
    padding-top: 0.08rem;
    padding-bottom: 0.08rem;
    padding-left: 0.2rem;
  }
  .d2>span{
    font-size: 0.2rem;
  }
  .d3{
    border-bottom: 0.01rem solid gainsboro;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 0.1rem;
    background-color: white;
  }
  .d3>img{
    width: 0.5rem;
  }
  .d4{
    border-bottom: 0.01rem solid gainsboro;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 0.1rem;
    background-color: white;
  }
  .d4>img{
    width: 0.5rem;
  }
  .duigou{
    float: right;
    font-size: 0.25rem;
    margin-top: 0.1rem;
    margin-right: 0.18rem;
  }
  button {
    width: 90%;
    height: 0.4rem;
    background-color: lime;
    color: white;
    margin-left: 5%;
    margin-top: 3%;
    border-radius: 0.06rem;
  }
  .dis{
    width: 70%;
    height: 1.4rem;
    background-color: white;
    position: absolute;
    top: 1.2rem;
    left: 0.6rem;
    text-align: center;
    border-top-left-radius: 0.1rem;
    border-top-right-radius: 0.1rem;
  }
  .btn1{
    width: 100%;
    height: 0.4rem;
    color: white;
    font-size: 0.18rem;
    margin-top: 0.1rem;
    background-color: limegreen;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
    position: absolute;
    left: -0.124rem;
  }
  .gth{
    font-size: 0.6rem;
    color: yellow;
  }
  .btn2{
    width: 100%;
    height: 0.4rem;
    color: white;
    font-size: 0.18rem;
    margin-top: -0.03rem;
    background-color: limegreen;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
    position: absolute;
    left: -0.124rem;
  }
  .changeBgc{
    color: limegreen;
  }
</style>
