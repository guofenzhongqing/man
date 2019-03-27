<template>
    <section>
      <div class="head">
        <!--左边箭头-->
        <i class="jiantouL" @click="getBack">&#xe6bc;</i>
        <span>我的</span>
      </div>

      <div class="info">
        <i class="touxiang">&#xe668;</i>
        <div class="SignIn">
          <span id="s1">登录/注册</span>
          <br>
          <span>
            <i class="phone">&#xe6cf;</i>
            暂无绑定手机号
          </span>
        </div>
        <i class="jiantouR enter">&#xe74c;</i>
      </div>

      <div class="content">
        <!--我的余额-->
        <div class="MyBalance" @click="MyBalance">
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
        <div class="MyIntegral" @click="MyIntegral">
          <span class="s4">0</span>分
          <br>
          <span class="s2">我的积分</span>
        </div>
      </div>

      <div class="text">
        <div class="PortOne">
          <!--我的订单-->
          <div class="MyOrder" @click="mine">
            <i class="dingdan">&#xe65d;</i>
            <span>我的订单</span>
            <i class="jiantouR enterT">&#xe74c;</i>
          </div>
          <!--积分商城-->
          <div class="IntegralMall" @click="integral">
            <i class="jifen">&#xe607;</i>
            <span>积分商城</span>
            <i class="jiantouR enterT">&#xe74c;</i>
          </div>
          <!--饿了么会员卡-->
          <div class="VipCard" @click="vipCard">
            <i class="vip">&#xe604;</i>
            <span>饿了么会员卡</span>
            <i class="jiantouR enterT">&#xe74c;</i>
          </div>
        </div>
        <div class="PortTwo">
          <!--服务中心-->
          <div class="serve" @click="serve">
            <i class="fuwu">&#xe62d;</i>
            <span>服务中心</span>
            <i class="jiantouR enterT">&#xe74c;</i>
          </div>
          <!--下载饿了么APP-->
          <div class="download" @click="downLoad">
            <i class="elm">&#xe722;</i>
            <span>下载饿了么APP</span>
            <i class="jiantouR enterT">&#xe74c;</i>
          </div>
        </div>
      </div>
   <router-view></router-view>
    </section>
</template>

<script>
    export default {
        name: "Head",
        methods: {
          serve() {
            this.$router.push({name: 'serve'})
          },
          vipCard() {
            this.$router.push({name: 'vipCard'})
          },
          downLoad() {
            this.$router.push({name: 'downLoad'})
          },
          integral() {
            this.$router.push({name: 'integralMall'})
          },
          mine() {
            this.$router.push({name: 'myOrder'})
          },
          getBack() {
            this.$router.go(-1)
          },
          MyBalance() {
            this.$router.push({name: 'MyBalance'})
          },
          MyIntegral() {
            this.$router.push({name: 'MyIntegral'})
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
.head>span{
  margin-right: 0.1rem;
}
.jiantouL{
   float: left;
   font-size: 0.2rem;
}
.info{
  width: 100%;
  height: 1.3rem;
  background-color: #008de1;
  color: white;
  padding-top: 0.4rem;
}
.touxiang{
   font-size: 0.6rem;
  margin-left: 0.2rem;
  float: left;
}
#s1{
  font-size: 0.2rem;
}
.phone{
  font-size: 0.13rem;
}
.SignIn{
  margin-left: 0.15rem;
  margin-top: 0.2rem;
  float: left;
}
.enter{
  float: right;
  margin-right: 0.1rem;
  margin-top: 0.4rem;
  font-size: 0.13rem;
}
.content{
  width: 100%;
  display: flex;
  border-bottom: 0.14rem solid gainsboro;
}
.MyBalance{
  width: 33%;
  height: 1rem;
  border-right: 0.01rem solid gainsboro;
  text-align: center;
  padding-top: 0.1rem;
}
.MyDiscount{
  width: 33%;
  height: 1rem;
  border-right: 0.01rem solid gainsboro;
  text-align: center;
  padding-top: 0.1rem;
}
.MyIntegral{
  width: 33%;
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
.text{
  width: 100%;
  height: 4.2rem;
  background-color: gainsboro;
}
.MyOrder{
  font-size: 0.18rem;
  padding-left: 0.1rem;
  padding: 0.1rem;
  border-bottom: 0.01rem solid gainsboro;
  background-color: white;
}
.enterT{
  float: right;
}
.IntegralMall{
  font-size: 0.18rem;
  padding-left: 0.1rem;
  padding: 0.1rem;
  border-bottom: 0.01rem solid gainsboro;
  background-color: white;
}
.jifen{
  color: orange;
}
.VipCard{
  font-size: 0.18rem;
  padding-left: 0.1rem;
  padding: 0.1rem;
  border-bottom: 0.01rem solid gainsboro;
  background-color: white;
}
  .vip{
    color: gold;
  }
.serve{
  font-size: 0.18rem;
  padding-left: 0.1rem;
  padding: 0.1rem;
  border-bottom: 0.01rem solid gainsboro;
  background-color: white;
  margin-top: 0.15rem;
}
  .download{
    font-size: 0.18rem;
    padding-left: 0.1rem;
    padding: 0.1rem;
    border-bottom: 0.01rem solid gainsboro;
    background-color: white;
  }
  .fuwu{
    color: blue;
  }
  .elm{
    color: blue;
  }
</style>
