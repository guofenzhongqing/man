<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL" @click="getBack">&#xe6bc;</i>
      <span>订单列表</span>
    </div>
    <div class="count">
      <h5>Q1: 什么是商家代金券?</h5>
      <span>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</span>
      <h5>Q2: 怎么获得商家代金券</h5>
      <span>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。<br>
「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</span>
      <h5>Q3: 商家代金券使用条件</h5>
      <span>商家代金券仅限在指定商家使用 <br>商家代金券仅限在线支付使用 <br>每个订单只能使用一张商家代金券,不可与其他代金券叠加使用</span>
    </div>
  </section>
</template>

<script>
    export default {
        name: "VoucherQ",
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
