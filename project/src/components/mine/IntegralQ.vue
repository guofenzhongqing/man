<template>
    <section>
      <div class="head">
        <!--左边箭头-->
        <i class="jiantouL" @click="getBack">&#xe6bc;</i>
        <span>积分问题</span>
      </div>
      <div class="count">
        <h5>Q1:怎么获得积分?</h5>
        <span>
在线支付的订单将获得订单积分奖励：
          <br>
积分将在用户完成评价后获得。
          <br>
可获得积分=订单金额×10（即1元=10点积分）。
          <br>
订单金额指实际付款金额，不包含活动优惠金额。
          <br>
每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</span>

        <h5>Q2:积分用来做什么?</h5>
        <span>可以在积分商城兑换各种礼品。</span>

        <h5>Q3:礼品兑换很多天了还没用收到, 该怎么办?</h5>
        <span>礼品从兑换日起,3个工作日(周末不算)内处理发货,发货后,通常会在3个工作日左右送达。</span>

        <h5>Q4:礼品兑换中的手机充值卡兑换,怎么样进行充值,充值之前会和我电话确认嘛?</h5>
        <span>不会,手机充值卡兑换,是直接充值到您填写的手机号上,充值之前不会和您电话确认,所以您在填写电话的时候要确认正确。</span>
      </div>
    </section>
</template>

<script>
    export default {
        name: "IntegralQ",
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
  .count{
    padding-top: 0.4rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
  }
  h5{
    font-size: 0.16rem;
  }
  .count>span{
    font-size: 0.14rem;
    color: grey;
  }
</style>
