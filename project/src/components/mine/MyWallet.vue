<template>
    <section>
        <!--我的余额-->
        <div class="MyBalance">
          <span class="s1">0.00</span>元
          <br>
          <span class="s2">我的余额</span>
        </div>
        <!--我的优惠-->
        <div class="MyDiscount">
          <span class="s3">0</span>个
          <br>
          <span class="s2">我的优惠</span>
        </div>
        <!--我的积分-->
        <div class="MyIntegral">
          <span class="s4">0</span>分
          <br>
          <span class="s2">我的积分</span>
        </div>
    </section>
</template>

<script>
    export default {
        name: "MyWallet"
    }
</script>

<style scoped>
  section{
    width: 104%;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.1rem solid gainsboro;
  }
  .MyBalance{
    width: 34%;
    height: 1rem;
    border-right: 0.01rem solid gainsboro;
    text-align: center;
    padding-top: 0.1rem;
  }
  .MyDiscount{
    width: 34%;
    height: 1rem;
    border-right: 0.01rem solid gainsboro;
    text-align: center;
    padding-top: 0.1rem;
  }
  .MyIntegral{
    width: 34%;
    height: 1rem;
    text-align: center;
    padding-top: 0.1rem;
  }
  .s1{
    font-size: 0.35rem;
    color: orange;
  }
  .s2{
    color: grey;
  }
  .s3{
    font-size: 0.35rem;
    color: red;
  }
  .s4{
    font-size: 0.35rem;
    color: lime;
  }
</style>
