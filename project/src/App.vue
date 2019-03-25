<template>
  <div id="app">
      <!--<MyHeader></MyHeader>-->
      <!--<AllCity></AllCity>-->
      <Head></Head>
      <MyInfo></MyInfo>
      <MyWallet></MyWallet>
      <router-view></router-view>
  </div>
</template>

<script>
  import AllCity from "./components/AllCity";
  import MyHeader from "./components/MyHeader";
  import Head from "./components/mine/Head";
  import MyInfo from "./components/mine/MyInfo";
  import MyWallet from "./components/mine/MyWallet";
export default {
  name: 'App',
  components: {
    AllCity,
    MyHeader,
    Head,
    MyInfo,
    MyWallet
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
</style>
