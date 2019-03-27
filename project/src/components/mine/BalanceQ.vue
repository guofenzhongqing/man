<template>
    <section>
      <div class="head">
        <!--左边箭头-->
        <i class="jiantouL" @click="getBack">&#xe6bc;</i>
        <span>余额问题</span>
      </div>
      <div class="count">
        <h5>Q1:使用余额的条件</h5>
        <span>为了保护账户安全,使用余额前必须先绑定手机号。</span>
        <h5>Q2:余额可以怎么用?</h5>
        <span>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。
</span>
        <h5>Q3:我要如何提现?</h5>
        <span>为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</span>
        <h5>Q4:为什么会提现失效</h5>
        <span>可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。
</span>
      </div>

    </section>
</template>

<script>
    export default {
        name: "BalanceQ",
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
