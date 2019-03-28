<template>
    <section>
      <div class="head">
        <i class="jiantouL left" @click="getBack">&#xe6bc;</i>
        <span class="food">{{food}}</span>
      </div>
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
            food: ''
          }
        },
        mounted() {
          this.food = JSON.parse(localStorage.getItem('food')).title;
          Vue.axios.get('https://elm.cangdu.org/v2/index_entry', null).then((res) => {
            console.log(res.data)
          }).catch((error) => {
            console.log(error);
          })
        },
      methods: {
        getBack() {
          this.$router.go(-1);
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
    margin-top: 0.7rem;
  }
</style>
