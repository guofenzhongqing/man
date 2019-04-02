<template>
    <section>
        <div class="head">
          <i class="jiantouL" @click="getBack">&#xe6bc;</i>
          <span class="new">搜索地址</span>
        </div>
        <div class="middle">
          <input type="text" placeholder="请输入小区/学校/写字楼等" class="inpu" v-model="user">
          <button class="queren" @click="verify">确认</button>
        </div>
        <div class="meet">
          <span>为了满足商家的送餐需求, 建议您从列表中选择地址</span>
        </div>
      <div class="foot" v-if="br">
        <p>找不到地址?</p>
        <p>请尝试输入小区、写字楼或学校名</p>
        <p>详细地址 (如门牌号) 可稍后输入哦。</p>
      </div>
      <div v-for="pro in array" class="location" v-if="!br" @click="skip(pro)">
        <p>{{pro.name}}</p>
        <p>{{pro.address}}</p>
      </div>
    </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Grabble",
        data() {
          return {
            user: '',
            array: [],
            br: true
          }
        },
        methods: {
          getBack() {
            this.$router.go(-1);
          },
          verify() {
            this.br = false;
            let obj = localStorage.getItem("id");
            let url = 'https://elm.cangdu.org/v1/pois?city_id' + obj + '&keyword=' + this.user + '&type=search';
            Vue.axios.get(url, null).then((res) => {
              console.log(res.data)
              this.array = res.data;
            }).catch((error) => {
              console.log(error);
            })
          },
          skip(n) {
            this.$router.push({name: 'newSite'});
            this.$store.commit('delivery',n);
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
    position: fixed;
    top: 0;
    z-index: 2;
    line-height: 0.6rem;
  }
  .jiantouL {
    font-size: 0.2rem;
    color: white;
    margin-left: 0.05rem;
  }
  .new {
    font-size: 0.2rem;
    font-weight: 600;
    color: white;
    margin-left: 1.1rem;
  }
  .middle {
    width: 100%;
    height: 0.65rem;
    background-color: white;
    margin-top: 0.7rem;
  }
  .inpu {
    width: 75%;
    height: 0.4rem;
    background-color: gainsboro;
    margin-left: 0.1rem;
    padding-left: 0.1rem;
  }
  .queren {
    width: 20%;
    height: 0.4rem;
    background-color: #008de1;
    text-align: center;
    line-height: 0.4rem;
    border-radius: 0.08rem;
  }
  .meet {
    width: 100%;
    height: 0.3rem;
    background-color: lightgoldenrodyellow;
    line-height: 0.3rem;
    text-align: center;
  }
  .meet>span {
    color: orange;
  }
  .foot {
    margin-top: 1rem;
    text-align: center;
  }
  .foot>p {
    font-size: 0.18rem;
    color: gray;
  }
  .location {
    border-top: 0.01rem solid gray;
  }
  .location>p {
    margin-left: 0.1rem;
    font-size: 0.18rem;
    font-weight: 600;
  }
</style>
