<template>
    <section>
      <!--头部-->
      <div class="head">
        <!--左边箭头-->
        <i class="jiantouL" @click="getBack">&#xe6bc;</i>
        <span>搜索</span>
      </div>
      <!--搜索框-->
      <div class="input">
        <input v-model="text" type="text" placeholder="请输入商家或美食名称" />
        <button @click="searchTo">提交</button>
      </div>
         <p>搜索历史</p>
      <p :for=" keyword in array">{{keyword.name}}</p>
    </section>
</template>

<script>
    export default {
      name: "Search",
      data() {
        return {
          array: [],
          keyword: ''
        }
      },
      methods: {
        //  返回
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
  /*箭头*/
  .jiantouL{
    float: left;
    font-size: 0.2rem;
  }
  /*外层包裹的div*/
  .input{
    display: flex;
    justify-content: center;
  }
  /*输入框*/
  input{
    -webkit-border-radius: 0.05rem;
    -moz-border-radius: 0.05rem;
    border-radius: 0.05rem;
    background: lightgrey;
    width: 70%;
    height: .4rem;
    margin-right: .1rem;
    margin-top: .5rem;
  }
  /*按钮*/
  button{
    width: 20%;
    height: .4rem;
    background: #008de1;
    border-radius: .05rem;
    margin-top: .5rem;
    color:white;
  }
</style>
