<template>
  <section>
    <div class="footR">
      <!--首页-->
      <div >
        <router-link :to="{path: '/all/takeout'}" class="da h" >
          <i class="elm">&#xe722;</i>
        </router-link>
        <p class="fa top">首页</p>
      </div>
      <!--搜索-->
      <div >
        <router-link :to="{}" class="znz da">
          <i class="znz">&#xe627;</i>
        </router-link>
        <p class="fa">搜索</p>
      </div>
      <!--订单-->
      <div >
        <router-link :to="{path: '/all/myOrder'}" class="da dingdan">
          <i class="dingdan">&#xe65d;</i>
        </router-link>
        <!--class="dingdan da"-->
        <p class="fa">订单</p>
      </div>
      <!--我的-->
      <div>
        <router-link :to="{path: '/all/head'}" class="mine da">
          <i class="mine">&#xe663;</i>
        </router-link>
        <p class="fa">我的</p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Footer",
      methods: {
      }
    }
</script>

<style scoped>
   .footR{
     height: 0.5rem;
     width: 100%;
     background-color: white;
     position: fixed;
     bottom: 0;
     display: flex;
     justify-content: space-around;
     text-align: center;
   }
  /*da 设置大小*/
  .da{
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    font-size: 0.3rem;
    color: grey;
  }
  .h{
    margin-top: -0.1rem;
  }
  /*修改主页的图标大小*/

  /*去除a标签的下划线*/
  a{
    text-decoration: none;
  }
/*当点击时，变换被击中者的样式*/
  .router-link-active{
    color: #008de1;
  }
  .fa{
    line-height: 0.14rem;
    font-size:0.14rem ;
  }
  .elm{
     font-size:0.4rem;
   }
  .znz{
    font-size:0.25rem;
  }
  .dingdan{
    font-size:0.25rem;
  }
  .mine{
    font-size:0.25rem;
  }
  p{
    margin-top: -0.15rem;
  }
  .top{
    position: absolute;
    left: 0.34rem;
    top: 0.5rem;
  }
</style>
