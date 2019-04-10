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
          <li v-for="pro in country" @click="retu">
            <p style="font-size: 0.14rem;padding: 0.1rem 0 0 0.15rem">{{pro.name}}</p>
            <p style="width: 0.3rem;height: 0.2rem;font-size: 0.12rem;background-color: #CCCCCC;border-radius: 0.1rem;text-align: center;line-height: 0.2rem;margin: 0.11rem 0.25rem 0 0">{{pro.count}}</p>
          </li>
          <li v-for="(item, index) in img" @click="change(index)" :class="{color1 : changeA == index || JSON.stringify(item).indexOf(transfer) == -1 ? false : true}">
            <p class="p1">
              <img :src="item.image_url.slice(-4).endsWith('png')===true ? 'https://fuss10.elemecdn.com/'+item.image_url+'.png' : 'https://fuss10.elemecdn.com/'+item.image_url+'.jpeg'" alt="" v-if="item.image_url === '' ? false : true" class="img1">
              <i class="shangjia" v-if="item.image_url === '' ? true : false" style="color: #2A5E99;font-size: 0.2rem">&#xe611;</i>
              <span>{{item.name}}</span>
            </p>
           <p class="p2">
            <span class="span1">{{item.count}}</span>
            <i class="jiantouR">&#xe74c;</i>
           </p>
          </li>
        </div>
          <div class="you">
            <li v-for="(pro,index) in img" v-if="changeA == index || JSON.stringify(pro).indexOf(transfer) == -1 ? false : true">
              <p v-for="(zi,founc) in pro.sub_categories.slice(1)" class="font" @click="hue(founc, index, zi.id, zi.name)">
                <span class="fon" :class="{color : changeA == abc && changeB == founc}">{{zi.name}}</span>
                <span class="figure" :class="{color : changeA == abc && changeB == founc}">{{zi.count}}</span>
              </p>
            </li>
          </div>
      </ul>
    </transition>
      <transition name="part">
      <ul class="part equal" v-if="smallRank">
        <div class="each" @click="aptitude">
          <i class="paixu i" style="color: #68A3D5">&#xe65b;</i>
          <p class="p" :class="{color : variate}">
            <span>智能排序</span>
          <i class="duihao" v-if="variate">&#xe630;</i>
          </p>
        </div>
        <div class="each" @click="distance">
          <i class="juli i" style="color: #68A3D5">&#xe603;</i>
          <p class="p" :class="{color : variate1}">
            <span>距离最近</span>
            <i class="duihao" v-if="variate1">&#xe630;</i>
          </p>
        </div>
        <div class="each" @click="volume">
          <i class="xiaoliang i" style="color: #F49393">&#xe67f;</i>
          <p class="p" :class="{color : variate2}">
            <span>销量最高</span>
            <i class="duihao" v-if="variate2">&#xe630;</i>
          </p>
        </div>
        <div class="each" @click="minimum">
          <i class="qisongjia i" style="color: #F4DE96">&#xe602;</i>
          <p class="p" :class="{color : variate3}">
            <span>起送价最低</span>
            <i class="duihao" v-if="variate3">&#xe630;</i>
          </p>
        </div>
        <div class="each" @click="speed">
          <i class="peisong i" style="color: #68A3D5">&#xe686;</i>
          <p class="p" :class="{color : variate4}">
            <span>配送速度最快</span>
            <i class="duihao" v-if="variate4">&#xe630;</i>
          </p>
        </div>
        <div class="each" @click="grade">
          <i class="pingfen i" style="color: #F3C683">&#xe60a;</i>
          <p class="p" :class="{color : variate5}">
            <span>评分最高</span>
            <i class="duihao" v-if="variate5">&#xe630;</i>
          </p>
        </div>
      </ul>
    </transition>
      <transition name="button">
        <ul class="button equal" v-if="smallScreen">
          <li style="font-size: 0.15rem;margin: 0.1rem 0 0.1rem 0.15rem;">配送方式</li>
          <li style="width: 1.3rem;height: 0.35rem;line-height: 0.35rem;border: 0.01rem solid lightgray;margin: 0 0 0.1rem 0.15rem" @click="choice">
            <i class="fengniao" style="color: #5BB3E0;font-size: 0.16rem;margin-left: 0.1rem" v-if="pair">&#xe631;</i>
            <i class="duihao" style="color: #008de1;font-size: 0.2rem;margin-left: 0.1rem" v-if="!pair">&#xe630;</i>
            <span style="font-size: 0.16rem;font-weight: 600" :class="{color: !pair}">蜂鸟专送</span>
          </li>
          <li style="font-size: 0.16rem;font-weight: 600;margin: 0.1rem 0 0.1rem 0.15rem">商家属性(可以多选)</li>
          <li style="width: 100%;overflow: hidden">
            <p class="own" @click="choice1">
              <i class="pin" style="color: #C5EBF7" v-if="pair1">&#xe600;</i>
              <i class="duihao" style="color: #008de1;font-size: 0.2rem" v-if="!pair1">&#xe630;</i>
              <span :class="{color: !pair1}">品牌商家</span>
            </p>
            <p class="own" @click="choice2">
              <i class="bao" style="color: #C5C5C5" v-if="pair2">&#xe609;</i>
              <i class="duihao" style="color: #008de1;font-size: 0.2rem" v-if="!pair2">&#xe630;</i>
              <span :class="{color: !pair2}">外卖保</span>
            </p>
            <p class="own" @click="choice3">
              <i class="zhun" style="color: #86C1FF" v-if="pair3">&#xe701;</i>
              <i class="duihao" style="color: #008de1;font-size: 0.2rem" v-if="!pair3">&#xe630;</i>
              <span :class="{color: !pair3}">准时达</span>
            </p>
            <p class="own" @click="choice4">
              <i class="xin" style="color: #EC974E" v-if="pair4">&#xe6b0;</i>
              <i class="duihao" style="color: #008de1;font-size: 0.2rem" v-if="!pair4">&#xe630;</i>
              <span :class="{color: !pair4}">新店</span>
            </p>
            <p class="own" @click="choice5">
              <i class="fu" style="color: #FFB899" v-if="pair5">&#xe649;</i>
              <i class="duihao" style="color: #008de1;font-size: 0.2rem" v-if="!pair5">&#xe630;</i>
              <span :class="{color: !pair5}">在线支付</span>
            </p>
            <p class="own" @click="choice6">
              <i class="piao" style="color: #DEDEDE" v-if="pair6">&#xe670;</i>
              <i class="duihao" style="color: #008de1;font-size: 0.2rem" v-if="!pair6">&#xe630;</i>
              <span :class="{color: !pair6}">开发票</span>
            </p>
          </li>
          <li style="width: 90%;margin-left: 0.15rem;margin-top: 0.1rem;">
            <button class="dele" @click="empty">清空</button>
            <button class="ente" @click="mark">确定<span v-if="count != 0 ? true :false" style="font-size: 0.18rem">({{count}})</span></button>
          </li>
        </ul>
      </transition>
    <div class="below">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="20">
        <div v-for="pro in shop" style="position: relative;padding:0.2rem 0;border-bottom: 0.01rem solid lightgrey" @click="specific(pro)">
          <img :src="'https://elm.cangdu.org/img/'+pro.image_path" alt="" class="picture">
          <span class="board">品牌</span>
          <span class="result">{{pro.name}}</span>
          <el-rate
            v-model="pro.rating"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
          <span class="mouth">月售{{pro.recent_order_num}}单</span>
          <span class="moneny">¥{{pro.float_minimum_order_amount}}起送 / 配送费约¥{{pro.float_delivery_fee}}</span>
          <div class="div1">
            <p v-for="mon in pro.supports" class="p3">{{mon.icon_name}}</p>
          </div>
          <p class="give" v-if="pro.delivery_mode">{{pro.delivery_mode.text}}</p>
          <p class="clocklike" v-if="pro.supports.length > 1 ? true : false">{{pro.supports[1].name}}</p>
          <div class="time"><span>{{pro.distance}}</span>/<span style="color: #008de1">{{pro.order_lead_time}}</span></div>
        </div>
      </ul>
    </div>
    <XBT v-if="snow"></XBT>
    <GoTop></GoTop>
  </section>
</template>

<script>
  import Vue from 'vue'
  import XBT from "./XBT";
  import GoTop from "./goTop";
  export default {
    name: "Classify",
    components: {GoTop, XBT},
    data() {
      return {
        food: '',
        small: false,
        smallRank: false,
        smallScreen: false,
        img: [],
        country: [],
        changeA: -1,
        changeB: -1,
        variate: false,
        variate1: false,
        variate2: false,
        variate3: false,
        variate4: false,
        variate5: false,
        shop: [],
        abc: '',
        pair: true,
        pair1: true,
        pair2: true,
        pair3: true,
        pair4: true,
        pair5: true,
        pair6: true,
        count: '',
        snow: true,
        array: [],
        loading: false,
        obj:'https://elm.cangdu.org/shopping/restaurants?latitude=' + JSON.parse(localStorage.getItem("city")).latitude + '&longitude=' + JSON.parse(localStorage.getItem("city")).longitude,
        alike: '',
        num: 0,
        transfer: ''
      }
    },
    mounted() {
      this.food = JSON.parse(localStorage.getItem('food')).title;
      this.transfer = JSON.parse(localStorage.getItem('food')).title
      Vue.axios.get('https://elm.cangdu.org/shopping/v2/restaurant/category', null).then((res) => {
        this.img = res.data.slice(1);
        this.country = res.data.splice(0, 1);
      }).catch((error) => {
        console.log(error);
      })
      let obj = JSON.parse(localStorage.getItem("city"))
      let url = 'https://elm.cangdu.org/shopping/restaurants?latitude=' + obj.latitude + '&longitude=' + obj.longitude
      Vue.axios.get(url, null).then((res) => {
        console.log(res.data);
        this.shop = res.data;
        this.snow = false;
      }).catch((error) => {
        console.log(error);
      })
      this.alike = url;
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
      change(index) {
        this.changeA = index;
      },
      retu() {
        this.small = false;
        this.bread = '分类'
      },
      // 智能排序
      aptitude() {
        this.variate = true;
        this.variate1 = false;
        this.variate2 = false;
        this.variate3 = false;
        this.variate4 = false;
        this.variate5 = false;
        this.smallRank = false;
        let url = this.obj + '&order_by=4'
        Vue.axios.get(url, null).then((res) => {
          this.shop = res.data;
        }).catch((error) => {
          console.log(error);
        })
        this.alike = url
      },
      // 距离最近
      distance() {
        this.variate1 = true;
        this.variate = false;
        this.variate2 = false;
        this.variate3 = false;
        this.variate4 = false;
        this.variate5 = false;
        this.smallRank = false;
        let url =this.obj + '&order_by=5'
        Vue.axios.get(url, null).then((res) => {
          this.shop = res.data;
        }).catch((error) => {
          console.log(error);
        })
        this.alike = url
      },
      // 销量最高
      volume() {
        this.variate2 = true;
        this.variate1 = false;
        this.variate = false;
        this.variate3 = false;
        this.variate4 = false;
        this.variate5 = false;
        this.smallRank = false;
        let url = this.obj + '&order_by=6'
        Vue.axios.get(url, null).then((res) => {
          this.shop = res.data;
        }).catch((error) => {
          console.log(error);
        })
        this.alike = url
      },
      // 起送价最低
      minimum() {
        this.variate1 = false;
        this.variate2 = false;
        this.variate = false;
        this.variate4 = false;
        this.variate5 = false;
        this.variate3 = true;
        this.smallRank = false;
        let url = this.obj + '&order_by=1'
        Vue.axios.get(url, null).then((res) => {
          this.shop = res.data;
        }).catch((error) => {
          console.log(error);
        })
        this.alike = url
      },
      // 配送速度最快
      speed() {
        this.variate1 = false;
        this.variate2 = false;
        this.variate3 = false;
        this.variate = false;
        this.variate5 = false;
        this.variate4 = true;
        this.smallRank = false;
        let url = this.obj + '&order_by=2'
        Vue.axios.get(url, null).then((res) => {
          this.shop = res.data;
        }).catch((error) => {
          console.log(error);
        })
        this.alike = url
      },
      // 评分最高
      grade() {
        this.variate1 = false;
        this.variate2 = false;
        this.variate3 = false;
        this.variate4 = false;
        this.variate = false;
        this.variate5 = true;
        this.smallRank = false;
        let url = this.obj + '&order_by=3'
        Vue.axios.get(url, null).then((res) => {
          this.shop = res.data;
        }).catch((error) => {
          console.log(error);
        })
        this.alike = url
      },
      hue(p, r, go, name) {
        this.snow = true;
        this.changeB = p;
        this.abc = r;
        this.small = false;
        this.food = name;
        let url = this.obj + '&restaurant_category_ids[]='+go
        Vue.axios.get(url, null).then((res) => {
          this.shop = res.data;
          this.snow = false;
        }).catch((error) => {
          console.log(error);
        })
        this.alike = url
      },
      choice() {
        this.pair = !this.pair;
        if (!this.pair) {
          this.count++;
          this.array.push(1)
        } else {
          this.count--;
          this.array.splice($.inArray(1,this.array), 1);
        }
      },
      choice1() {
        this.pair1 = !this.pair1;
        if (!this.pair1) {
          this.count++;
          this.array.push(8);
        } else {
          this.array.splice($.inArray(8,this.array), 1);
          this.count--;
        }
      },
      choice2() {
        this.pair2 = !this.pair2;
        if (!this.pair2) {
          this.count++;
          this.array.push(7);
        } else {
          this.array.splice($.inArray(7,this.array), 1);
          this.count--;
        }
      },
      choice3() {
        this.pair3 = !this.pair3;
        if (!this.pair3) {
          this.count++;
          this.array.push(9)
        } else {
          this.array.splice($.inArray(9,this.array), 1);
          this.count--;
        }
      },
      choice4() {
        this.pair4 = !this.pair4;
        if (!this.pair4) {
          this.count++;
          this.array.push(5)
        } else {
          this.array.splice($.inArray(5,this.array), 1);
          this.count--;
        }
      },
      choice5() {
        this.pair5 = !this.pair5;
        if (!this.pair5) {
          this.count++;
          this.array.push(3)
        } else {
          this.array.splice($.inArray(3,this.array), 1);
          this.count--;
        }
      },
      choice6() {
        this.pair6 = !this.pair6;
        if (!this.pair6) {
          this.count++;
          this.array.push(4)
        } else {
          this.array.splice($.inArray(4,this.array), 1);
          this.count--;
        }
      },
      empty() {
        this.count = 0;
        this.pair = true;
        this.pair1 = true;
        this.pair2 = true;
        this.pair3 = true;
        this.pair4 = true;
        this.pair5 = true;
        this.pair6 = true;
      },
      specific(p) {
        this.$router.push({path: '/store'});
        this.$store.commit('information', p);
      },
      mark() {
        this.smallScreen = false;
        let url = this.obj
        for (let i = 0;i < this.array.length;i++) {
          switch (this.array[i]) {
            case 1 : {
              url = url + '&delivery_mode[]=1'
              break;
            }
            case 8 : {
              url = url + '&support_ids[]=8'
              break;
            }
            case 7 : {
              url = url + '&support_ids[]=7'
              break;
            }
            case 9 : {
              url = url + '&support_ids[]=9'
              break;
            }
            case 5 : {
              url = url + '&support_ids[]=5'
              break;
            }
            case 3 : {
              url = url + '&support_ids[]=3'
              break;
            }
            case 4 : {
              url = url + '&support_ids[]=4'
              break;
            }
          }
        }
        Vue.axios.get(url, null).then((res) => {
          this.shop = res.data;
        }).catch((error) => {
          console.log(error);
        })
        this.alike = url
      },
      loadMore() {
        this.snow = true;
        this.loading = true;
        this.num += 20;
        setTimeout(() => {
          let url = this.alike + '&offset='+ this.num
          Vue.axios.get(url, null).then((res) => {
            for (let i = 0;i<res.data.length;i++) {
              this.shop.push(res.data[i]);
            }
            this.snow = false;
          }).catch((error) => {
            console.log(error);
          })
          this.loading = false;
        }, 2500);
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
    height: 3.9rem;
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
  }
  .p>span {
    font-size: 0.16rem;
  }
  .p>i {
    font-size: 0.25rem;
    color: #008de1;
    float: right;
    margin-right: 0.2rem;
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
    width: 48%;
    height: 100%;
    float: right;
    overflow: scroll;
  }
  .you::-webkit-scrollbar {display:none}
  .zuo>li {
    width: 100%;
    display: flex;
    justify-content: space-between;
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
    font-size: 0.18rem;
  }
  .ente {
    width: 45%;
    height: 0.4rem;
    border-radius: 0.1rem;
    background-color: lightgreen;
    margin-left: 0.1rem;
    font-size: 0.18rem;
  }
.img1 {
  width: 0.2rem;
}
  .p1 {
    text-align: center;
    padding: 0.1rem 0 0 0.15rem;
  }
  .p1>span {
    font-size: 0.14rem;
  }
  .p2 {
    padding: 0.08rem 0.15rem 0 0;
  }
  .span1 {
    display: inline-block;
    width: 0.3rem;
    height: 0.2rem;
    font-size: 0.12rem;
    background-color: #CCCCCC;
    border-radius: 0.1rem;
    text-align: center;
    line-height: 0.2rem;
  }
  .p2>i {
    font-size: 0.13rem;
    margin-left: 0.02rem;
  }
  .color1 {
    background-color: white;
  }
  .font {
    margin-left: 0.1rem;
    margin-bottom: 0;
    width: 96%;
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: 0.01rem solid gray;
  }
  .fon {
    font-size: 0.15rem;
  }
  .figure {
    display: inline-block;
    font-size: 0.15rem;
    float: right;
    margin-right: 0.2rem;
  }
  .picture {
    width: 0.8rem;
    margin-left: 0.1rem;
  }
  .board {
    background-color: yellow;
    color: black;
    font-size: 0.15rem;
    position: absolute;
    top: 0.25rem;
    left: 1rem;
  }
  .result {
    font-size: 0.15rem;
    font-weight: 900;
    position: absolute;
    top: 0.25rem;
    left: 1.4rem;
    width: 1.3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .mouth {
    position: absolute;
    font-size: 0.1rem;
    left: 1.75rem;
    top: 0.59rem;
  }
  .moneny {
    position: absolute;
    font-size: 0.12rem;
    top: 0.85rem;
    left: 1rem;
  }
  .div1 {
    position: absolute;
    top: 0.2rem;
    right: 0.05rem;
  }
  .p3 {
    font-size: 0.12rem;
    padding: 0.01rem;
    margin-left: 0.01rem;
    border: 0.01rem solid lightgrey;
    float: left;
  }
  .give {
    text-align: center;
    font-size: 0.12rem;
    width: 0.52rem;
    height: 0.2rem;
    line-height: 0.2rem;
    background-color: #008de1;
    color: white;
    position: absolute;
    top: 0.5rem;
    right: 0.47rem;
  }
  .clocklike {
    text-align: center;
    font-size: 0.12rem;
    width: 0.4rem;
    height: 0.2rem;
    line-height: 0.2rem;
    color: lightskyblue;
    border: 0.01rem solid lightskyblue;
    position: absolute;
    top: 0.5rem;
    right: 0.05rem;
  }
  .time > span {
    font-size: 0.12rem;
  }
  .time {
    position: absolute;
    top: 0.82rem;
    right: 0.06rem;
  }
</style>
<style>
  .el-rate__icon, .el-icon-star-on {
    font-size: 0.02rem;
  }
  .el-rate__item {
    width: 0.1rem;
  }
  .el-rate {
    position: absolute;
    top: 0.6rem;
    left: 1rem;
  }
  .el-rate__text {
    position: absolute;
    left: 0.55rem;
    font-size: 0.1rem;
  }
</style>


