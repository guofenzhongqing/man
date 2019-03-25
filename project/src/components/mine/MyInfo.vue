<template>
    <section>
      <div class="content">
        <!--头像部分-->
        <i class="touxiang">&#xe668;</i>
        <!--个人信息-->
        <div class="info">
          <span class="s1">登录/注册</span>
          <br>
          <i class="phone">&#xe6cf;</i>
          <span class="s2">暂无绑定手机号</span>
        </div>
        <!--右边小箭头-->
        <i class="enter">&#xe74c;</i>
      </div>
    </section>
</template>

<script>
    export default {
        name: "MyInfo"
    }
</script>

<style scoped>
  @import"../../assets/css/Iconfont.css";
  .content{
    width: 104%;
    height: 1rem;
    background-color: #008de1;
    overflow: hidden;
  }
  .info{
    color: white;
    float: left;
    margin-top: 0.22rem;
    margin-left: 0.14rem;
  }
  .touxiang{
    font-size: 0.65rem;
    float: left;
    margin-left: 0.14rem;
  }
  .s1{
    font-size: 0.2rem;
  }
  .s2{
    font-size: 0.13rem;
  }
  .enter{
    color: white;
    font-size: 0.16rem;
    float: right;
    margin-top: 0.3rem;
  }
</style>
