<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL" @click="get">&#xe6bc;</i>
      <span>我的积分</span>
    </div>
    <div class="body">
      <div class="show">
        <div class="top">
          <span class="s1">当前积分</span>
          <router-link :to="{name:'IntegralQ'}" class="s2">
            <i class="wenhao">&#xe610;</i>
            积分说明
          </router-link>
        </div>
        <br>
        <span class="s3">0</span>
        <span>分</span>
        <br>
        <button class="btn" @click="block">积分兑换商品</button>
      </div>
    </div>
    <div class="foot">
      <span>最近30天积分记录</span>
      <i class="jiaoyi">&#xe72a;</i>
      <p>最近30天无积分记录</p>
      <h5>快去下单赚取大量积分吧</h5>
    </div>
    <div class="dis"  v-if="!show">
      <div class="topT">
        <i class="gth">&#xe60d;</i>
        <p>快去下单赚取大量积分吧</p >
      </div>
      <button class="btn1" @click="none">确定</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: "MyIntegral",
    data(){
      return {
        show:true
      }
    },
    methods:{
      get(){
        window.history.go(-1)
      },
      block(){
        this.show = false
      },
      none(){
        this.show = true
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
    position: fixed;
    z-index: 2;
  }
  .jiantouL{
    float: left;
    font-size: 0.2rem;
  }
  .body{
    width: 100%;
    height: 2rem;
    background-color: #008de1;
    padding-top: 10%;
  }
  .show{
    width: 90%;
    height: 96%;
    background-color: white;
    border-radius: 0.05rem;
    margin-left: 5%;
    padding-top: 2%;
    overflow: hidden;
  }
  .s1{
    float: left;
    font-size: 0.14rem;
    padding-left: 2%;
  }
  .s2{
    float: right;
    color: #008de1;
    font-size: 0.12rem;
    padding-right: 2%;
  }
  .s3{
    font-size: 0.5rem;
    margin-left: 2.5%;
  }
  button {
    width: 94%;
    height: 0.4rem;
    border-radius: 0.05rem;
    margin-left: 0.1rem;
    color: white;
    font-size: 0.18rem;
    background-color: orangered;
    margin-top: 0.1rem;
  }
  .foot{
    width: 100%;
    height: 4.66rem;
    background-color: whitesmoke;
    position: relative;
  }
  .foot>span{
    color: gray;
    position: absolute;
    left: 0.14rem;
    top: 0.17rem;
  }
  .jiaoyi{
    color: #008de1;
    font-size: 1rem;
    position: absolute;
    left: 1.3rem;
    top: 1rem;
  }
  .foot>p{
    position: absolute;
    left: 1.08rem;
    top: 2.4rem;
    font-size: 0.17rem;
  }
  h5{
    position: absolute;
    left: 1.2rem;
    top: 2.6rem;
    font-size: 0.12rem;
    color: gray;
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
    left: -0.1rem;
  }
  .gth{
    font-size: 0.6rem;
    color: yellow;
  }
</style>
