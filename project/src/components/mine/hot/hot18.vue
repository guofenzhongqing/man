<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL">&#xe6bc;</i>
      <span>余额问题</span>
    </div>
    <p>{{hot18}}</p>
  </section>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "hot18",
    data(){
      return{
        hot18:''
      }
    },
    mounted(){
      Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res) => {
        this.hot18 = res.data.balanceContent
      }).catch((error) => {
        console.log(error)
      })
    }
  }
</script>

<style scoped>
  @import"../../../assets/css/Iconfont.css";
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
  p{
    margin-left: 0.15rem;
    margin-right: 0.15rem;
    font-size: 0.18rem;
  }
</style>

