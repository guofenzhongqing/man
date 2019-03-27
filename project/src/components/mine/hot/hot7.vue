<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL" @click="getBack">&#xe6bc;</i>
      <span>其它问题</span>
    </div>
    <p>{{hot7}}</p>
  </section>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "hot7",
    data(){
      return{
        hot7:''
      }
    },
    mounted(){
      Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res) => {
        this.hot7 = res.data.otherContent
      }).catch((error) => {
        console.log(error)
      })
    },
    methods: {
      getBack() {
        this.$router.go(-1);
      }
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
    position: fixed;
    z-index: 2;
  }
  .jiantouL{
    float: left;
    font-size: 0.2rem;
  }
  p{
    margin-left: 0.15rem;
    margin-right: 0.15rem;
    font-size: 0.18rem;
    padding-top: 0.4rem;
  }
</style>
