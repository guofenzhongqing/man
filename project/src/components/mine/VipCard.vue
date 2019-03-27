<template>
    <section>
      <div class="head">
        <!--左边箭头-->
        <i class="jiantouL" @click="getBack">&#xe6bc;</i>
        <span>会员中心</span>
      </div>
      <p class="p1">为账户 <strong>dome</strong> 购买会员</p>
      <div class="div1">
        <div class="d1">
          <span>会员特权</span>
          <router-link :to="{}">
            <span class="s1">会员说明</span>
            <i class="jiantouR">&#xe74c;</i>
          </router-link>
        </div>
        <div class="d2">
          <img src="../../assets/img/sheng.jpeg">
          <div>
            <span class="d2s1">减免配送费</span>
            <br>
            <span class="d2s2">每月减免30单,每日可减免3单,每单最高减4元</span>
            <br>
            <span class="d2s3">蜂鸟专送专享</span>
          </div>
        </div>
          <div class="d3">
            <img src="../../assets/img/jifen.jpeg">
            <div>
              <span class="d2s1">减免配送费</span>
              <br>
              <span class="d2s2">每月减免30单,每日可减免3单,每单最高减4元</span>
              <br>
              <span class="d2s3">蜂鸟专送专享</span>
            </div>
        </div>
      </div>
      <div class="div2">
        <p id="p1">开通会员</p>
        <p id="p2">
          1个月 <span>¥20</span>
          <a>购买</a>
        </p>
      </div>
      <div class="div3">
        <span>兑换会员</span>
        <router-link :to="{}">
          <span class="s1">使用卡号卡密</span>
          <i class="jiantouR">&#xe74c;</i>
        </router-link>
      </div>
    </section>
</template>

<script>
    export default {
        name: "VipCard",
        methods: {
        getBack() {
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 6.66rem;
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
.div1{
  background-color: white;
  padding-top: 0.1rem;
  padding-left: 0.14rem;
}
.d1{
  border-bottom: 0.01rem solid gainsboro;
  padding-bottom: 0.07rem;
}
  .d1>span{
    font-size: 0.18rem;
  }
  .d1>a{
    float: right;
    color: gray;
  }
  .d1>a>i{
    font-size: 0.12rem;
  }
  .d2{
    border-bottom: 0.01rem solid gainsboro;
    padding-bottom: 0.07rem;
  }
  .d2>img{
    width: 0.4rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
  .d2s2{
    font-size: 0.1rem;
    color: gray;
  }
  .d2s3{
    font-size: 0.1rem;
    color: gray;
  }
  .d2>div{
    position: absolute;
    left: 0.7rem;
    top: 1.3rem;
  }
  .d3{
    padding-bottom: 0.07rem;
  }
  .d3>img{
    width: 0.4rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
  .d3>div{
    position: absolute;
    left: 0.7rem;
    top: 2.05rem;
  }
  .div2{
    background-color: white;
    margin-top: 0.1rem;
  }
  #p1{
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    margin-left: 0.1rem;
    border-bottom: 0.01rem solid gainsboro;
    font-size: 0.18rem;
  }
  #p2{
    padding-top: 0.05rem;
    padding-bottom: 0.15rem;
    margin-left: 0.1rem;
    border-bottom: 0.01rem solid gainsboro;
    font-size: 0.18rem;
  }
  #p2>span{
    color: orangered;
  }
  #p2>a{
    font-size: 0.15rem;
    float: right;
    border: 0.02rem solid orange;
    border-radius: 0.06rem;
    color: orange;
    padding: 0.02rem 0.12rem 0.02rem 0.12rem;
    margin-right: 0.1rem;
  }
  .div3{
    background-color: white;
    margin-top: 0.1rem;
  }
  .div3>span{
    font-size: 0.18rem;
  }
</style>
