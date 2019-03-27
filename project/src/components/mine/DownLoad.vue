<template>
    <section>
      <div class="head">
        <!--左边箭头-->
        <i class="jiantouL" @click="getBack">&#xe6bc;</i>
        <span>下载</span>
      </div>
      <img src="../../assets/img/2.jpg">
      <p>下载饿了么APP</p>
      <div class="download">下载</div>
    </section>
</template>

<script>
    export default {
        name: "DownLoad",
        methods: {
          getBack() {
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>
  section{
    position: relative;
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
  img{
    width: 2rem;
    border-radius: 9%;
    position: absolute;
    left: 0.85rem;
    top: 1rem;
  }
  p{
    position: absolute;
    left: 1.22rem;
    top: 3rem;
    font-size: 0.18rem;
  }
  .download{
    width: 90%;
    height: 0.3rem;
    line-height: 0.3rem;
    background-color: lime;
    text-align: center;
    border-radius: 5%;
    position: absolute;
    left: 0.18rem;
    top: 3.5rem;
    font-size: 0.15rem;
    color: white;
  }
</style>
