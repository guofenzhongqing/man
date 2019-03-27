<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL" @click="getBack">&#xe6bc;</i>
      <span>教我拍大片</span>
    </div>
    <p>{{hot5}}</p>
  </section>
</template>

<script>
  import Vue from "vue";
  export default {
    name: "hot5",
    data(){
      return{
        hot5:''
      }
    },
    mounted(){
      Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res) => {
        this.hot5 = res.data.phototutorialContent
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
