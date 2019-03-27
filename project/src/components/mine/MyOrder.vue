<template>
    <section>
      <div class="head">
        <!--左边箭头-->
        <i class="jiantouL" @click="getBack">&#xe6bc;</i>
        <span>订单列表</span>
      </div>
    </section>
</template>

<script>
    export default {
        name: "MyOrder",
        methods: {
          getBack() {
          this.$router.go(-1);
         }
       }
    }
</script>

<style scoped>
  @import"../../assets/css/Iconfont.css";
  .head{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #008de1;
    color: white;
    font-size: 0.2rem;
    text-align: center;
    overflow: hidden;
  }
  .jiantouL{
    float: left;
    font-size: 0.2rem;
  }
</style>
