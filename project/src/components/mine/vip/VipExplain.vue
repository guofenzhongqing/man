<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL" @click="getBack">&#xe6bc;</i>
      <span>我的优惠</span>
    </div>
    <p>尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>

      <div class="count">
        <h5>Q1:特权介绍</h5>
        <span>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。<br>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。<br>更多特权，敬请期待！</span>
        <h5>Q2:资费介绍</h5>
        <span>饿了么会员卡: 20元</span>
        <h5>Q3:使用说明</h5>
        <span>当用户满足一下任一条件,会员服务自动失效:</span>
        <div>自绑定之日起超过31天; <br>
          在31天内累计使用减免配送费的蜂鸟订单数量达到30单;
        </div>
        <h5>Q4:购卡说明</h5>
        <span>在线购买:饿了么App>我的>饿了么会员卡</span>
        <h5>Q5:温馨提示</h5>
        <span>用户在当前会员服务失效前,无法购买新卡。<br>请认准饿了么官方渠道,任何从其他第三方途径获得的会员卡,饿了么不保证其可用性。</span>
      </div>
  </section>
</template>

<script>
    export default {
        name: "VipExplain",
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
    width: 84%;
    padding-top: 0.6rem;
    padding-left: 12%;
    font-size: 0.14rem;
  }
  .count{
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
  .count>div{
    padding-left: 0.2rem;
    padding-top: 0.1rem;
    font-size: 0.14rem;
  }
</style>
