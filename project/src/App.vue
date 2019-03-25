<template>
  <div id="app">
      <!--<MyHeader></MyHeader>-->
      <!--<AllCity></AllCity>-->
      <Head></Head>
      <router-view></router-view>
  </div>
</template>

<script>
  import AllCity from "./components/AllCity";
  import MyHeader from "./components/MyHeader";
  import Head from "./components/mine/Head";
export default {
  name: 'App',
  components: {
    AllCity,
    MyHeader,
    Head
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
