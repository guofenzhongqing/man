<template>
  <section>
    <div class="head">
      <!--左边箭头-->
      <i class="jiantouL" @click="getBack">&#xe6bc;</i>
      <span>服务中心</span>
    </div>
    <div class="kefu">
      <div class="kefuOne">
        <i class="kefu1">&#xe624;</i>
        <p>在线客服</p>
      </div>
      <div class="kefuTwo">
        <i class="kefu2">&#xe606;</i>
        <p>在线客服</p>
      </div>
    </div>
    <p class="hot">热门问题</p>
    <router-link :to="{name: 'hot1'}" class="col-xs-12">
      <span>超级会员权益说明</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot2'}" class="col-xs-12">
      <span>签到规则</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot3'}" class="col-xs-12">
      <span>用户等级说明</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot4'}" class="col-xs-12">
      <span>积分问题</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot5'}" class="col-xs-12">
      <span>教我拍大片</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot6'}" class="col-xs-12">
      <span>支付问题</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot7'}" class="col-xs-12">
      <span>其它问题</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot8'}" class="col-xs-12">
      <span>准时达问题</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot9'}" class="col-xs-12">
      <span>会员说明</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot10'}" class="col-xs-12">
      <span>会员问题</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot11'}" class="col-xs-12">
      <span>红包问题</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot12'}" class="col-xs-12">
      <span>活动细则</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot13'}" class="col-xs-12">
      <span>补签规则</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot14'}" class="col-xs-12">
      <span>优惠说明</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot15'}" class="col-xs-12">
      <span>负责声明</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot16'}" class="col-xs-12">
      <span>代金券说明</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot17'}" class="col-xs-12">
      <span>商务合作</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot18'}" class="col-xs-12">
      <span>余额问题</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot19'}" class="col-xs-12">
      <span>超赞商家</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot20'}" class="col-xs-12">
      <span>匿名购买</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
    <router-link :to="{name: 'hot21'}" class="col-xs-12">
      <span>活动问题</span>
      <i class="jiantouR">&#xe74c;</i>
    </router-link>
  </section>

</template>

<script>
    export default {
        name: "Serve",
        methods: {
        getBack() {
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  @import"../../assets/css/Iconfont.css";
  .head{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #008de1;
    color: white;
    font-size: 0.2rem;
    text-align: center;
    overflow: hidden;
  }
  .jiantouL{
    float: left;
    font-size: 0.2rem;
  }
  .kefuOne{
    width: 50%;
    height: 0.9rem;
    float: left;
    border-right: 0.01rem solid gainsboro;
    border-bottom: 0.01rem solid gainsboro;
    text-align: center;
    padding-top: 0.15rem;
  }
  .kefuTwo{
    width: 50%;
    height: 0.9rem;
    float: left;
    border-bottom: 0.01rem solid gainsboro;
    text-align: center;
    padding-top: 0.15rem;
  }
  .kefu1{
    color: lightcoral;
    font-size: 0.25rem;
  }
  .kefu2{
    color: lightgreen;
    font-size: 0.25rem;
  }
  .hot{
    font-size: 0.2rem;
    margin-top: 1.1rem;
    padding-bottom: 0.08rem;
    padding-left: 0.2rem;
  }
  .col-xs-12{
    color: black;
    border-top: 0.01rem solid gainsboro;
    padding-top: 0.08rem;
    padding-bottom: 0.08rem;
  }
  .jiantouR{
    float: right;
  }
</style>
