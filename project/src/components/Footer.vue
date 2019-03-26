<template>
  <section>
    <div class="footR">
      <!--首页-->
      <div >
        <router-link :to="{}" class="elm da " >
          <span>&#xe722;</span>
        </router-link>
        <br/>
        <span class="fa ">首页</span>
      </div>
      <!--搜索-->
      <div >
        <router-link :to="{}" class="znz da">
          <span>&#xe627;</span>
        </router-link>
        <br/>
        <span class="fa">搜索</span>
      </div>
      <!--订单-->
      <div >
        <router-link :to="{}" class="da dingdan">
          <span>&#xe65d;</span>
        </router-link>
        <!--class="dingdan da"-->
        <br/>
        <span class="fa">订单</span>
      </div>
      <!--我的-->
      <div>
        <router-link :to="{}" class="mine da">
          <span>&#xe663;</span>
        </router-link>
        <br/>
        <span class="fa">我的</span>
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
  @import"../assets/css/Iconfont.css";
   .footR{
     height: 1.2rem;
     width: 100%;
     background-color: #ddd;
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
  /*修改主页的图标大小*/
  .elm{
    font-size:0.5rem;
    margin-top: -0.11rem;
  }
  /*up扶这个元素上去*/
  .up{
    margin-top: 5rem;
  }
  /*去除a标签的下划线*/
  a{
    text-decoration: none;
  }
/*当点击时，变换被击中者的样式*/
  .router-link-active{
    color: red;
  }
  .fa{
    line-height: 0.15rem;
    font-size:0.15rem ;
  }
</style>
