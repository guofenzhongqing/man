<template>
    <section>
      <div v-for="pro in shop" style="position: relative;padding:0.2rem 0;border-bottom: 0.01rem solid lightgrey">
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
    </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Merchant",
        data() {
          return {
            shop: []
          }
        },
        mounted() {
          let obj = JSON.parse(localStorage.getItem("city"))
          let url = 'https://elm.cangdu.org/shopping/restaurants?latitude=' + obj.latitude + '&longitude=' + obj.longitude
          Vue.axios.get(url, null).then((res) => {
            this.shop = res.data;
          }).catch((error) => {
            console.log(error);
          })
        }
    }
</script>

<style scoped>
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
    top: 0.55rem;
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
    top: -0.04rem;
    left: 0.55rem;
    font-size: 0.1rem;
  }
</style>
