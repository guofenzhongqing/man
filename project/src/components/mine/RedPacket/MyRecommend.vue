<template>
  <section>
    <div class="head">
      <i class="jiantouL" @click="get">&#xe6bc;</i>
      <span>推荐有奖</span>
    </div>
    <div class="XHS">
      <img src="../../../assets/img/activity.png" style="width: 100%; height: 100%">
    </div>
    <div class="content">
      <div class="col-xs-4">
        <i class="iconfont1" @click="getDiv">&#xe678;</i>
        <p>邀请微信好友</p>
      </div>
      <div class="col-xs-4">
        <i class="iconfont2" @click="getDiv">&#xe6a0;</i>
        <p>邀请QQ好友</p>
      </div>
      <div class="col-xs-4">
        <i class="iconfont3" @click="getDiv">&#xe612;</i>
        <p>面对面邀请</p>
      </div>
    </div>
    <div class="foot">
      <div class="col-xs-6 col">
        <p>累计收益</p>
        <span class="span1">0</span>元
      </div>
      <div class="col-xs-6">
        <p>成功邀请</p>
        <span class="span2">0</span>人
      </div>
    </div>
    <div class="SY">
    <p>-收益明细-</p>
   </div>
    <div class="HBB">
      <i class="iconfont4">&#xe68d;</i>
      <p>还不赶紧去邀请好友</p>
    </div>
    <div class="dis"  v-if="!show">
      <div class="topT">
        <i class="gth">&#xe60d;</i>
        <p>请在饿了么APP中打开</p>
      </div>
      <button class="btn1" @click="none">确定</button>
    </div>
  </section>
  
</template>

<script>
    export default {
        name: "MyRecommend",
      data(){
          return {
            show:true
          }
      },
      methods:{
          get(){
            window.history.go(-1)
        },
        getDiv(){
          this.show=false
        },
        none(){
          this.show=true
        }
      }
    }
</script>

<style scoped>
  section {
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
    font-family:"iconfont" !important;
    font-size:0.2rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float: left
  }
  .iconfont1{
    font-family:"iconfont" !important;
    font-size:0.6rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: green;
  }
  .iconfont2{
    font-family:"iconfont" !important;
    font-size:0.6rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: blue;
  }
  .iconfont3{
    font-family:"iconfont" !important;
    font-size:0.6rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: gold;
  }
  .iconfont4{
    font-family:"iconfont" !important;
    font-size:0.36rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: grey;
  }
  .col-xs-4{
    text-align: center;
  }
  .XHS{
    width: 100%;
    height: 2.5rem;
    background-color: brown;
    text-align: center;
    line-height: 3rem;
  }
  .XHS p{
    color: white;
    font-size: 0.3rem;
  }
  .content{
    background-color: white;
    width: 100%;
    height: 19%;
    border-top: 0.12rem solid #EBEBEB;
    margin-top: 0.2rem;
  }
  .content p{
    font-size: 0.13rem;
  }
  .col-xs-6{
    text-align: center;
    margin-top: 0.3rem;
  }
  .span1{
    font-size: 0.2rem;
    color: red;
  }
  .span2{
    font-size: 0.2rem;
    color: black;
  }
  .col{
    border-right: 0.005rem solid grey;
  }
  .SY {
    position: absolute;
    top:5.2rem;
    left: 1.52rem;
  }
  .HBB{
    text-align: center;
    position: absolute;
    top:5.8rem;
    left: 1.15rem;
  }
  .dis{
    width: 70%;
    height: 1.4rem;
    background-color: white;
    position: absolute;
    top: 1.9rem;
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
    background-color: green;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
  }
  .gth{
    font-family:"iconfont" !important;
    font-size:0.7rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: orange;
  }
</style>
