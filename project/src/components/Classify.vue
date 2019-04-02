<template>
  <section>
    <div class="head">
      <i class="jiantouL left" @click="getBack">&#xe6bc;</i>
      <span class="food">{{food}}</span>
      <div class="row" style="padding: 0.05rem 0;border-bottom: 0.01rem solid lightgray;background-color: #FFFFFF;">
        <div class="dropDown col-xs-4" @click="dianji">
          <span :class="{color: small}">{{!small ? food : '分类'}}</span>
          <p class="triangle" :class="{spin: small}">▼</p>
        </div>
        <div class="dropDown rank col-xs-4" @click="rank" style="border-left: 0.01rem solid lightgray;border-right: 0.01rem solid lightgray">
          <span :class="{color: smallRank}">排序</span>
          <p class="triangle" :class="{spin: smallRank}">▼</p>
        </div>
        <div class="dropDown screen col-xs-4" @click="screen">
          <span :class="{color: smallScreen}">筛选</span>
          <p class="triangle" :class="{spin: smallScreen}">▼</p>
        </div>
      </div>
    </div>
    <transition name="all">
      <ul class="all equal" v-if="small">
        <div class="zuo">
          <li>
            <p style="font-size: 0.14rem;margin: 0.15rem">异国料理</p>
            <p style="font-size: 0.14rem; margin: 0.15rem;width: 0.4rem;height: 0.2rem;border-radius: 0.1rem;background-color: #CCCCCC;text-align: center;line-height: 0.2rem;color: white">1394</p>
          </li>
          <li>
            <p class="up">
              <i class="kuaican tubiao" style="color: #F1B08D">&#xe661;</i>
              <span>快餐便当</span>
            </p>
            <p class="up1">
              <span class="num">1100</span>
              <i class="jiantouR">&#xe74c;</i>
            </p>
          </li>
          <li>
            <p class="up">
              <i class="xiaochi tubiao" style="color: #93CB74">&#xe601;</i>
              <span>小吃夜宵</span>
            </p>
            <p class="up1">
              <span class="num">91</span>
              <i class="jiantouR">&#xe74c;</i>
            </p>
          </li>
          <li>
            <p class="up">
              <i class="guoshu tubiao" style="color: #F1A7A7">&#xe615;</i>
              <span>果蔬生鲜</span>
            </p>
            <p class="up1">
              <span class="num">49</span>
              <i class="jiantouR">&#xe74c;</i>
            </p>
          </li>
          <li>
            <p class="up">
              <i class="tese tubiao" style="color: #F3BC67">&#xe605;</i>
              <span>特色菜系</span>
            </p>
            <p class="up1">
              <span class="num">43</span>
              <i class="jiantouR">&#xe74c;</i>
            </p>
          </li>
          <li>
            <p class="up">
              <i class="shangdian tubiao" style="color: #8DD2F5">&#xe62e;</i>
              <span>商店超市</span>
            </p>
            <p class="up1">
              <span class="num">19</span>
              <i class="jiantouR">&#xe74c;</i>
            </p>
          </li>
          <li>
            <p class="up">
              <i class="dangao tubiao" style="color: #8E90EE">&#xe6d7;</i>
              <span>鲜花蛋糕</span>
            </p>
            <p class="up1">
              <span class="num">13</span>
              <i class="jiantouR">&#xe74c;</i>
            </p>
          </li>
          <li>
            <p class="up">
              <i class="shangjia tubiao" style="color: #4D7CB9">&#xe611;</i>
              <span>全部商家</span>
            </p>
            <p class="up1">
              <span class="num">0</span>
              <i class="jiantouR">&#xe74c;</i>
            </p>
          </li>
          <li>
            <p class="up">
              <i class="inpin tubiao" style="color: #92DCBF">&#xe6cc;</i>
              <span>甜品饮品</span>
            </p>
            <p class="up1">
              <span class="num">21</span>
              <i class="jiantouR">&#xe74c;</i>
            </p>
          </li>
        </div>
        <div class="you">

        </div>
      </ul>
    </transition>
      <transition name="part">
      <ul class="part equal" v-if="smallRank">
        <div class="each" @click="select($event)">
          <i class="paixu i" style="color: #68A3D5">&#xe65b;</i>
          <p class="p">智能排序</p>
        </div>
        <div class="each" @click="select($event)">
          <i class="juli i" style="color: #68A3D5">&#xe603;</i>
          <p class="p">距离最近</p>
        </div>
        <div class="each" @click="select($event)">
          <i class="xiaoliang i" style="color: #F49393">&#xe67f;</i>
          <p class="p">销量最高</p>
        </div>
        <div class="each" @click="select($event)">
          <i class="qisongjia i" style="color: #F4DE96">&#xe602;</i>
          <p class="p">起送价最低</p>
        </div>
        <div class="each" @click="select($event)">
          <i class="peisong i" style="color: #68A3D5">&#xe686;</i>
          <p class="p">配送速度最快</p>
        </div>
        <div class="each" @click="select($event)">
          <i class="pingfen i" style="color: #F3C683">&#xe60a;</i>
          <p class="p">评分最高</p>
        </div>
      </ul>
    </transition>
      <transition name="button">
        <ul class="button equal" v-if="smallScreen">
          <li style="font-size: 0.15rem;margin: 0.1rem 0 0.1rem 0.15rem;">配送方式</li>
          <li style="width: 1.3rem;height: 0.35rem;line-height: 0.35rem;border: 0.01rem solid lightgray;margin: 0 0 0.1rem 0.15rem">
            <i class="fengniao" style="color: #5BB3E0;font-size: 0.16rem;margin-left: 0.1rem">&#xe631;</i>
            <span style="font-size: 0.16rem;font-weight: 600">蜂鸟专送</span>
          </li>
          <li style="font-size: 0.16rem;font-weight: 600;margin: 0.1rem 0 0.1rem 0.15rem">商家属性(可以多选)</li>
          <li style="width: 100%;overflow: hidden">
            <p class="own">
              <i class="pin" style="color: #C5EBF7">&#xe600;</i>
              <span>品牌商家</span>
            </p>
            <p class="own">
              <i class="bao" style="color: #C5C5C5">&#xe609;</i>
              <span>外卖保</span>
            </p>
            <p class="own">
              <i class="zhun" style="color: #86C1FF">&#xe701;</i>
              <span>准时达</span>
            </p>
            <p class="own">
              <i class="xin" style="color: #EC974E">&#xe6b0;</i>
              <span>新店</span>
            </p>
            <p class="own">
              <i class="fu" style="color: #FFB899">&#xe649;</i>
              <span>在线支付</span>
            </p>
            <p class="own">
              <i class="piao" style="color: #DEDEDE">&#xe670;</i>
              <span>开发票</span>
            </p>
          </li>
          <li style="width: 90%;margin-left: 0.15rem;margin-top: 0.1rem;">
            <button class="dele">清空</button>
            <button class="ente">确定</button>
          </li>
        </ul>
      </transition>
    <Merchant class="below"></Merchant>
  </section>
</template>

<script>
  import Vue from 'vue'
  import Merchant from "./Merchant";
  export default {
    name: "Classify",
    components: {Merchant},
    data() {
      return {
        food: '',
        small: false,
        smallRank: false,
        smallScreen: false,
        img: [],
      }
    },
    mounted() {
      this.food = JSON.parse(localStorage.getItem('food')).title;
      Vue.axios.get('https://elm.cangdu.org/shopping/v2/restaurant/category', null).then((res) => {
        this.img = res.data;
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      })
    },
    methods: {
      getBack() {
        this.$router.go(-1);
      },
      dianji() {
        this.small = !this.small;
        this.smallRank = false;
        this.smallScreen = false;
      },
      rank() {
        this.smallRank = !this.smallRank;
        this.small = false;
        this.smallScreen = false;
      },
      screen() {
        this.smallScreen = !this.smallScreen;
        this.smallRank = false;
        this.small = false;
      },
      select(e) {
        console.log(e);
      }
    }
  }
</script>

<style scoped>
  section {
    width: 100%;
  }
  .head {
    width: 100%;
    height: 0.6rem;
    background-color: #008de1;
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 2;
  }
  .left {
    font-size: 0.2rem;
    color: white;
    line-height: 0.6rem;
    margin-left: 0.1rem;
  }
  .food {
    font-size: 0.2rem;
    line-height: 0.6rem;
    color: white;
  }
  .below {
    margin-top: 1.1rem;
  }
  .dropDown {
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
  }
  .dropDown>span {
    font-size: 0.15rem;
  }
  .triangle {
    display: inline-block;
    transition: all 0.3s;
    font-size: 0.15rem;
  }
  .spin {
    transform: rotateZ(180deg);
    color: #008de1;
    transition:all 0.3s;
  }
  .color {
    color: #008de1;
  }
  .all {
    width: 100%;
    height: 4.3rem;
  }
  .part {
    width: 100%;
    height: 3.65rem;
  }
  .button {
    width: 100%;
    height: 2.9rem;
  }
  .equal {
    position: fixed;
    top: 1.01rem;
    z-index: 2;
    overflow: hidden;
    background-color: white;
  }
  .p {
    width: 91%;
    height: 100%;
    display: inline-block;
    border-bottom: 0.01rem solid gray;
    margin-left: 0.1rem;
    font-size: 0.16rem;
  }
  .each {
    height: 0.6rem;
    line-height: 0.6rem;
    padding-left: 0.2rem;
  }
  .i {
    font-size: 0.17rem;
  }
  .all-enter-active,.all-leave-active {
    transition: all 0.5s;
  }
  .all-enter, .all-leave-to {
    height: 0;
  }
  .button-enter-active,.button-leave-active {
    transition: all 0.5s;
  }
  .button-enter, .button-leave-to {
    height: 0;
  }
  .part-enter-active,.part-leave-active {
    transition: all 0.5s;
  }
  .part-enter, .part-leave-to {
    height: 0;
  }
  .zuo {
    width: 50%;
    height: 100%;
    background-color: #F1F1F1;
    float: left;
  }
  .you {
    width: 50%;
    height: 100%;
    float: right;
  }
  .zuo>li {
    width: 100%;
    height: 0.48rem;
    display: flex;
    justify-content: space-between;
  }
  .zuo>li>p {
    display: inline-block;
    font-size: 0.15rem;
  }
  .num {
    display: inline-block;
    width: 0.4rem;
    height: 0.2rem;
    text-align: center;
    line-height: 0.2rem;
    background-color: #CCCCCC;
    font-size: 0.14rem;
    color: white;
    border-radius: 0.1rem;
  }
  .up {
    margin-left: 0.1rem;
  }
  .jiantouR {
    font-size: 0.12rem;
  }
  .tubiao {
    font-size: 0.18rem;
  }
  .up1 {
    margin-right: 0.1rem;
  }
  .own {
    width: 28%;
    float: left;
    border: 0.01rem solid lightgray;
    padding: 0.05rem;
    margin-left: 0.15rem;
  }
  .own>i {
    font-size: 0.2rem;
  }
  .own>span {
    font-size: 0.16rem;
  }
  .dele {
    width: 45%;
    height: 0.4rem;
    border-radius: 0.1rem;
    background-color: lightgray;
    font-size: 0.16rem;
  }
  .ente {
    width: 45%;
    height: 0.4rem;
    border-radius: 0.1rem;
    background-color: lightgreen;
    margin-left: 0.1rem;
    font-size: 0.16rem;
  }

</style>


