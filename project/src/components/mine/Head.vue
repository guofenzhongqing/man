<template>
    <section>
      <div class="head">
        <!--左边箭头-->
        <i class="jiantou">&#xe6bc;</i>
        <span>我的 </span>
      </div>
    </section>
</template>

<script>
    export default {
        name: "Head"
    }
</script>

<style scoped>
@import"../../assets/css/Iconfont.css";
.head{
  width: 104%;
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: #008de1;
  color: white;
  font-size: 0.2rem;
  text-align: center;
  overflow: hidden;
}
  .jiantou{
    float: left;
    font-size: 0.2rem;
  }
  span{
    margin-right: 0.8rem;
  }
</style>
