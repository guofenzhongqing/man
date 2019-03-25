<template>
    <section>
        <div class="head">
          <span class="left" @click="">ele.me</span>
          <span class="right">登录 | 注册</span>
        </div>
    </section>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style scoped>
  .head{
    width: 104%;
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #008de1;
    color: white;
    overflow: hidden;
  }
  .left{
    margin-left: 0.1rem;
    font-size: 0.18rem;
  }
  .right{
    float: right;
    margin-right: 0.1rem;
    font-size: 0.16rem;
  }
</style>
