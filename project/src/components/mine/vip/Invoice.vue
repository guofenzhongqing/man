<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL" @click="getBack">&#xe6bc;</i>
      <span>购买记录</span>
    </div>
    <img src="../../../assets/img/no-log.png">
    <p>没 有 购 买 记 录</p>
  </section>
</template>

<script>
    export default {
        name: "Invoice",
      methods: {
        getBack() {
          this.$router.go(-1);
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
  img{
    margin-top: 1.6rem;
    margin-left: 0.3rem;
  }
  p{
    margin-top: 0.15rem;
    margin-left: 1.2rem;
    color: gray;
  }
</style>
