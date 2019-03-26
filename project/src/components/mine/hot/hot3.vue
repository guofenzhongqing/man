<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL">&#xe6bc;</i>
      <span>用户等级说明</span>
    </div>
    <p>{{hot3}}</p>
  </section>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "hot3",
    data(){
      return{
        hot3:''
      }
    },
    mounted(){
      Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res) => {
        this.hot3 = res.data.rankContent
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
