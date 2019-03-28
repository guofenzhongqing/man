<template>
    <section>
      <div class="head">
        <router-link to="{}" style="margin-left: 0.05rem">
          <i class="fdj" style="font-size: 0.25rem">&#xe614;</i>
        </router-link>
        <router-link :to="{path: '/allCity'}" class="ming">{{name}}</router-link>
        <router-link :to="{path: '/login'}" style="margin-right: 0.05rem;font-size: 0.15rem">登录|注册</router-link>
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
       <Merchant></Merchant>
      </div>
    </section>
</template>

<script>
import Vue from 'vue'
import Merchant from "./Merchant";
    export default {
        name: "TakeOut",
      components: {Merchant},
      data() {
          return {
            array: [],
            arr:[],
            name: '',
            shop: []
          }
        },
      methods: {
        clickInto(p) {
          this.$store.commit('foodstuff', p);
          this.$router.push({name: 'classify'})
        }
      },
        mounted() {
          Vue.axios.get('https://elm.cangdu.org/v2/index_entry').then((res) => {
            this.array = res.data.slice(0,8);
            this.arr = res.data.slice(8, 16);
          }).catch((error) => {
            console.log(error)
          })
          console.log(JSON.parse(localStorage.getItem("city")))
           let obj = JSON.parse(localStorage.getItem("city"))
          this.name = obj.name
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
    width: 1.5rem;
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
</style>
<style>
  .mint-swipe-indicators > .is-active {
    background-color: blue;
    opacity: 1;
  }
</style>
