<template>
    <section>
      <div class="head">
        <router-link to="{}" style="margin-left: 0.05rem">
          <i class="fdj" style="font-size: 0.25rem">&#xe614;</i>
        </router-link>
        <router-link :to="{path: '/allCity'}" class="ming">{{name}}</router-link>
        <router-link :to="{path: '/login'}" style="margin-right: 0.05rem;font-size: 0.15rem" v-if="person">登录|注册</router-link>
        <router-link :to="{path: '/all/head'}" style="margin-right: 0.05rem;font-size: 0.25rem" class="mine" v-if="!person">&#xe663;</router-link>
      </div>
      <mt-swipe :auto="0" class="wheel">
        <mt-swipe-item>
          <div v-for="pro in array" class="carousel" @click="clickInto(pro)">
            <img :src="'https://fuss10.elemecdn.com'+pro.image_url" alt="" class="img1">
            <p class="letter">{{pro.title}}</p>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div v-for="pro in arr" class="carousel" @click="clickInto(pro)">
            <img :src="'https://fuss10.elemecdn.com/'+pro.image_url" alt="" class="img1">
            <p class="letter">{{pro.title}}</p>
          </div>
        </mt-swipe-item>
      </mt-swipe>
      <div class="foot">
          <div style="margin: 0.1rem">
            <i class="jifen" style="font-size: 0.15rem">&#xe607;</i>
            <span style="font-size: 0.15rem">附近商家</span>
          </div>
        <div v-for="pro in shopping" style="position: relative;padding:0.2rem 0;border-bottom: 0.01rem solid lightgrey" @click="specific(pro)">
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
            <p v-for="mon in pro.supports" class="p1">{{mon.icon_name}}</p>
          </div>
          <p class="give">{{pro.delivery_mode.text}}</p>
          <p class="clocklike">{{(pro.supports)[1].name}}</p>
          <div class="time"><span>{{pro.distance}}</span>/<span style="color: #008de1">{{pro.order_lead_time}}</span></div>
        </div>
      </div>
    </section>
</template>

<script>
import Vue from 'vue'
    export default {
        name: "TakeOut",
        data() {
          return {
            array: [],
            arr:[],
            name: '',
            shop: [],
            person: true,
            shopping: []
          }
        },
      methods: {
        clickInto(p) {
          this.$store.commit('foodstuff', p);
          this.$router.push({name: 'classify'})
        },
        specific(p) {
          this.$router.push({path: '/store'});
          this.$store.commit('information', p);
        }
      },
        mounted() {
          Vue.axios.get('https://elm.cangdu.org/v2/index_entry').then((res) => {
            console.log(res.data)
            this.array = res.data.slice(0,8);
            this.arr = res.data.slice(8, 16);
          }).catch((error) => {
            console.log(error)
          })
           let obj = JSON.parse(localStorage.getItem("city"))
          this.name = obj.name
          let url = 'https://elm.cangdu.org/shopping/restaurants?latitude=' + obj.latitude + '&longitude=' + obj.longitude + '&order_by=' + this.$store.getters.digit
          Vue.axios.get(url, null).then((res) => {
            this.shopping = res.data;
          }).catch((error) => {
            console.log(error);
          })
          if (JSON.parse(localStorage.getItem('success')) === null) {
            this.person = true
          } else {
            this.person = false
          }
        }
    }
</script>

<style scoped>
  @import"../assets/css/Iconfont.css";
  section {
    width: 100%;
    position: relative;
  }
  .head {
    width: 100%;
    height: 0.6rem;
    background-color: #008de1;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
  }
  .head >a {
    color: white;
    font-size: 0.19rem;
    line-height: 0.6rem;
  }
  .ming {
    width: 1.4rem;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
.img1 {
  width: 0.6rem;
}
.wheel {
  width: 100%;
  height: 2.2rem;
  margin-top: 0.7rem;
}
  .carousel {
    width: 20%;
    height: 0.7rem;
    float: left;
    margin: 0.09rem;
    text-align: center;
  }
.letter {
  text-align: center;
  font-size: 0.15rem;
}
  .foot {
    width: 100%;
    margin-top: 0.1rem;
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
    width: 0.5rem;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0.2rem;
    right: 0.05rem;
  }
  .p1 {
    font-size: 0.12rem;
    padding: 0.01rem;
    margin-left: 0.01rem;
    border: 0.01rem solid lightgrey;
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
  .mint-swipe-indicators > .is-active {
    background-color: blue;
    opacity: 1;
  }
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
