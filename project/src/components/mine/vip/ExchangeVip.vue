<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL" @click="getBack">&#xe6bc;</i>
      <span>兑换会员</span>
    </div>
    <p class="p1">成功兑换后将关联到当前账号: <strong>dome</strong></p>
    <input type="text" placeholder="请输入10位卡号" oninput="if(value.length > 10)value = value.slice(0, 10)" v-model="i1">
    <input type="text" placeholder="请输入6位卡密" oninput="if(value.length > 6)value = value.slice(0, 6)" v-model="i2">
    <button @click="b1" :disabled="i1.length == 10 && i2.length == 6 ? false : true" :class="{sb:i1.length == 10 && i2.length == 6 ? true : false}">兑换</button>
    <p class="p2">----温馨提示----</p>
    <p class="p3">新兑换的会员服务,权益以「会员说明」为准。<br>月卡: 30次减免配送费。<br>季卡: 90次减免配送费。<br>年卡: 360次减免配送费。<br>*仅限蜂鸟专送订单,每日最多减免3单,每单最高减免4元(一个月按31天计算)</p>

    <div class="dis"  v-if="!show">
      <div class="topT">
        <i class="gth">&#xe60d;</i>
        <p>无效的卡号</p >
      </div>
      <button class="btn1" @click="none">确定</button>
    </div>
  </section>
</template>

<script>
    export default {
      name: "ExchangeVip",
      data(){
        return {
          i1:'',
          i2:'',
          show:true
        }
      },
      methods: {
        getBack() {
          this.$router.go(-1);
        },
        b1(){
          this.show = false
        },
        none(){
          this.show = true
        }
      }
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 100%;
    background-color: gainsboro;
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
    position: fixed;
    z-index: 2;
  }
  .jiantouL{
    float: left;
    font-size: 0.2rem;
  }
  .p1{
    padding-top: 0.5rem;
    padding-left: 0.14rem;
  }
  input{
    width: 100%;
    height: 8%;
    border-bottom: 0.01rem solid gainsboro;
    padding-left: 0.15rem;
  }
  button{
    width: 90%;
    height: 6%;
    background-color: gray;
    border-radius: 0.08rem;
    color: white;
    margin-left: 5%;
    margin-top: 0.2rem;
    font-size: 0.2rem;
  }
  .p2{
    width: 100%;
    text-align: center;
    font-size: 0.18rem;
    margin-top: 0.3rem;
    color: gray;
  }
  .p3{
    font-size: 0.13rem;
    color: gray;
    margin-left: 0.5rem;
    margin-top: 0.2rem;
  }
  .sb{
    background-color: limegreen;
  }
  .dis{
    width: 70%;
    height: 1.4rem;
    background-color: white;
    position: absolute;
    top: 1.2rem;
    left: 0.6rem;
    text-align: center;
    border-top-left-radius: 0.1rem;
    border-top-right-radius: 0.1rem;
  }
  .btn1{
    width: 100%;
    height: 0.4rem;
    color: white;
    font-size: 0.18rem;
    margin-top: 0.1rem;
    background-color: limegreen;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
    position: absolute;
    left: -0.14rem;
  }
  .gth{
    font-size: 0.6rem;
    color: yellow;
  }
</style>
