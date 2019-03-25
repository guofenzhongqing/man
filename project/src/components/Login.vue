<template>
    <section>
        <input type="text" placeholder="账号" class="inp1">
      <div style="border: 0.01rem solid #F4F4F4">
        <input :type="abc ? 'text' : 'password'" placeholder="密码" ref="nu">
          <p class="p1" @click="hideP()" :class="{trans: abc}"></p>
          <p class="p2" :class="{bgc: abc}">abc...</p>
      </div>
      <div>
        <input type="text" placeholder="验证码">
        <img :src="site" alt="" class="img1">
        <div class="face" @click="changePicture()">
          <p>看不清</p>
          <p style="color: #90C3F3">换一张</p>
        </div>
      </div>
      <div class="div1">
        <p>温馨提示, 未注册过的账号, 登录时将自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
        <button class="btn btn-success">登录</button>
      </div>
      <router-link :to="{path: '/reset'}" class="pull-right a1">重置密码?</router-link>
    </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Login",
        data() {
          return {
            abc: false,
            site: ''
          }
        },
        methods: {
        hideP() {
          this.abc = !this.abc
        },
        changePicture() {
          Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
            this.site = res.data.code
          }).catch((error) => {
            console.log(error);
          })
        }
      },
      mounted() {
          Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
            this.site = res.data.code
          }).catch((error) => {
            console.log(error);
          })
      }
    }
</script>

<style scoped>
section {
  width: 100%;
  position: relative;
}
  input {
    width: 100%;
    height: 0.6rem;
    font-size: 0.2rem;
    padding-left: 0.2rem;
  }
.inp1 {
  margin-top: 0.2rem;
}
  .p1 {
    width: 0.3rem;
    height: 0.3rem;
    background-color: blue;
    border-radius: 50%;
    background-color: #F1F1F1;
    position: absolute;
    top: 0.95rem;
    right: 0.4rem;
    z-index: 2;
    transition: all 1s;
  }
.p2 {
  width: 0.5rem;
  height: 0.2rem;
  background-color: #CCCCCC;
  color: white;
  border-radius: 20% / 50%;
  text-align: center;
  position: absolute;
  top: 1rem;
  right: 0.1rem;
  transition: all 1s;
}
  .trans {
    right: 0.05rem;
    transition: all 1s;
  }
  .bgc {
    background-color: #4CD964;
    transition: all 1s;
  }
  .face {
    position: absolute;
    top: 1.45rem;
    right: 0.1rem;
  }
  .face>p {
    font-size: 0.15rem;
  }
  .img1 {
    width: 1rem;
    position: absolute;
    top: 1.55rem;
    right: 0.6rem;
  }
  .div1 {
    width: 94%;
    margin: 0.2rem auto;
  }
  .div1>p {
    color: #FD3535;
    font-size: 0.15rem;
  }
  .div1>button {
    width: 100%;
    height: 0.5rem;
    font-size: 0.2rem;
  }
  .a1 {
    margin: 0.2rem 0.2rem 0 0;
    font-size: 0.2rem;
  }
</style>
