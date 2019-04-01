<template>
    <section>
      <div class="head nav navbar-fixed-top">
        <i class="jiantouL" @click="get">&#xe6bc;</i>
        <span>历史红包</span>
      </div>
      <div class="red" v-for="item in project1">
        <div class="left col-xs-4">
          <i class="rmb">&#xe60b;</i>
          <span class="s1">{{item.amount}}</span>
          <p class="p1">{{item.description_map.sum_condition}}</p>
        </div>
        <div class="right col-xs-8">
          <i class="guoqi">&#xe659;</i>
          <span class="s2">{{item.name}}</span><br>
          <span class="s3">{{item.description_map.validity_periods}}</span><br>
          <span class="s3">{{item.description_map.phone}}</span>
        </div>
      </div>
    </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "HistoricalRed",
      data(){
          return {
            project:{},
            project1:[]
          }
      },
      methods:{
        get(){
          this.$router.go(-1)
        }
      },
      created(){
        //获取历史红包数据
        Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0').then((e,q)=>{
          this.project1=e.data
          console.log(this.project1)
        })
      }
    }
</script>

<style scoped>
  section{
    background-color: white;
    padding-top: 0.3rem;
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
    margin-bottom: 0.3rem;
  }
  .jiantouL{
    font-family:"iconfont" !important;
    font-size:0.2rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float: left
  }
  .guoqi{
    font-family:"iconfont" !important;
    font-size:0.6rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float: right;
  }
  .red{
    width: 90%;
    height: 1.4rem;
    background-color: grey;
    border-radius: 0.08rem;
    margin-left: 5%;
    margin-top:0.2rem;
  }
  .iconfont3{
    font-family:"iconfont" !important;
    font-size:0.25rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.25px;
    -moz-osx-font-smoothing: grayscale;
    color: lightgray;
  }
  .s1{
    font-size: 0.5rem;
    color: lightgray;
  }
  .p1{
    color: lightgray;
    font-size: 0.12rem;
  }
  .left{
    margin-top: 0.18rem;
    border-right: 0.005rem solid lightgray;
  }
  .right{
    margin-top: 0.3rem;
  }
  .s2{
    font-size: 0.22rem;
    color: black;
  }
  .s3{
    font-size: 0.1rem;
    color: gainsboro;
  }
</style>
