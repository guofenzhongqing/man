<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL" @click="get">&#xe6bc;</i>
      <span>我的余额</span>
    </div>
    <div class="body">
      <div class="show">
        <div class="top">
          <span class="s1">当前余额</span>
          <router-link :to="{name:'BalanceQ'}" class="s2">
            <i class="wenhao">&#xe610;</i>
            余额说明
          </router-link>
        </div>
        <br>
        <span class="s3">0.00</span>
        <span>元</span>
        <br>
        <button>提现</button>
      </div>
    </div>
    <div class="foot">
      <span>交 易 明 细</span>
      <i class="jiaoyi">&#xe72a;</i>
      <p>暂 无 明 细 记 录</p>
    </div>
  </section>
</template>

<script>
    export default {
        name: "MyBalance",
      methods:{
          get(){
            window.history.go(-1)
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
    background-color: darkgray;
    margin-top: 0.1rem;
  }
  .foot{
    width: 100%;
    height: 4.45rem;
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
    left: 1.23rem;
    top: 2.4rem;
    font-size: 0.16rem;
  }
</style>
