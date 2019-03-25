<template>
  <section>
    <div style="margin-top: 0.2rem"><input type="text" placeholder="账号"></div>
    <div style="border: 0.01rem solid lightgrey"><input type="text" placeholder="旧密码"></div>
    <div><input type="text" placeholder="请输入新密码"></div>
    <div style="border: 0.01rem solid lightgrey"><input type="text" placeholder="请确认密码"></div>
    <div>
      <input type="text" placeholder="验证码">
      <img :src="changePic" alt="" class="img1">
      <div class="changeP" @click="changeP()">
        <p class="p1">看不清</p>
        <p class="p2" style="color: #90C3F3">换一张</p>
      </div>
    </div>
    <div class="butt">
      <button class="btn btn-success">确认修改</button>
    </div>
  </section>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "Reset",
    data() {
      return {
        changePic: ''
      }
    },
    mounted() {
      Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
        this.changePic = res.data.code
      }).catch((error) => {
        console.log(error);
      })
    },
    methods: {
      changeP() {
        Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
          this.changePic = res.data.code
        }).catch((error) => {
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped>
  section {
    width: 100%;
    position: relative;
  }
  section>div {
    width: 100%;
  }
  section>div>input {
    width: 100%;
    height: 0.6rem;
    padding-left: 0.2rem;
    font-size: 0.25rem;
  }
  .changeP {
    position: absolute;
    top: 2.5rem;
    right: 0.1rem;
  }
  .changeP>p {
    font-size: 0.16rem;
  }
  .img1 {
    width: 1rem;
    position: absolute;
    top: 2.5rem;
    right: 0.6rem;
  }
  .butt {
    width: 96%;
    margin: 0.2rem auto;
  }
  .butt>button {
    width: 100%;
    height: 0.5rem;
    font-size: 0.25rem;
  }
</style>
