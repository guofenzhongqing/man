<template>
    <section>
      <div class="head">
        <i class="iconfont" @click="get">&#xe64b;</i>
        <span>选择发票抬头</span>
      </div>
      <div class="content">
        <span>不需要开发票</span>
        <el-checkbox v-model="checked" class="EL"></el-checkbox>
      </div>
      <button class="btn btn-success">确定</button>
    </section>
</template>

<script>
    export default {
        name: "car_FQ",
      data(){
          return {
            checked: true
          }
      },
      methods:{
        get(){
          window.history.go(-1)
        },
      }
    }
</script>

<style scoped>
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.26rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float:left;
    color: white;
  }
  .head{
    width: 100%;
    height: 0.5rem;
    background-color: blue;
    line-height:0.5rem ;
    font-size: 0.2rem;
    text-align: center;
    color: white;
  }
  .EL{
    margin-right: 0.1rem;
    float: right;
  }
  .content{
    height: 0.4rem;
    width: 100%;
    line-height: 0.4rem;
    background-color: white;
    margin-top: 0.1rem;
  }
  .btn{
    width: 80%;
    margin-left: 10%;
    margin-top: 0.1rem;
  }
</style>
