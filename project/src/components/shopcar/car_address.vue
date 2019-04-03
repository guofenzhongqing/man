<template>
  <section>
    <div class="head">
      <i class="iconfont" @click="get">&#xe64b;</i>
      <span>选择地址</span>
    </div>
    <router-link class="foot" :to="{name:'car_TJ'}">
      <i class="iconfont1">&#xe61c;</i>
      <span>新增收货地址</span>
    </router-link>
  </section>

</template>

<script>
    export default {
        name: "car_address",
      methods:{
          get(){
            window.history.go(-1)
          }
      }
    }
</script>

<style scoped>
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.26rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float:left;
    color: white;
  }
  .iconfont1{
    font-family:"iconfont" !important;
    font-size:0.24rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: blue;
  }
  .head{
    width: 100%;
    height: 0.5rem;
    background-color: blue;
    line-height:0.5rem ;
    font-size: 0.2rem;
    text-align: center;
    color: white;
  }
  .foot{
    width: 100%;
    height: 0.45rem;
    position: fixed;
    bottom: 0;
    text-align: center;
    line-height: 0.45rem;
  }
  .foot span{
    color: blue;
    font-size: 0.18rem;
  }
</style>
