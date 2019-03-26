<template>
  <div id="app">
      <!--<AllCity></AllCity>-->
      <!--<Head></Head>-->
      <!--<MyOrder></MyOrder>-->
      <!--<IntegralMall></IntegralMall>-->
      <!--<VipCard></VipCard>-->
      <!--<Serve></Serve>-->
      <!--<DownLoad></DownLoad>-->
       <hot1></hot1>
      <router-view></router-view>
  </div>
</template>

<script>
  import AllCity from "./components/AllCity";
  import Head from "./components/mine/Head";
  import MyOrder from "./components/mine/MyOrder";
  import IntegralMall from "./components/mine/IntegralMall";
  import VipCard from "./components/mine/VipCard";
  import Serve from "./components/mine/Serve";
  import DownLoad from "./components/mine/DownLoad";
  import hot1 from "./components/mine/hot/hot1";
export default {
  name: 'App',
  components: {
    AllCity,
    Head,
    MyOrder,
    IntegralMall,
    VipCard,
    Serve,
    DownLoad,
    hot1
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  *{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  body,html{
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>
