<template>
    <section>
      <div class="head navbar-fixed-top">
        <span class="glyphicon glyphicon-chevron-left" style="margin-left: 0.05rem" @click="toAllCity"></span>
        <span style="margin-left: 1.2rem">密码登录</span>
      </div>
        <input type="text" placeholder="账号" class="inp1" v-model="account">
      <div style="border: 0.01rem solid lightgrey">
        <input :type="abc ? 'text' : 'password'" placeholder="密码" ref="nu" v-model="password">
          <p class="p1" @click="hideP" :class="{trans: abc}"></p>
          <p class="p2" :class="{bgc: abc}">abc...</p>
      </div>
      <div>
        <input type="text" placeholder="验证码" v-model="authCode">
        <img :src="site" alt="" class="img1">
        <div class="face" @click="changePicture()">
          <p>看不清</p>
          <p style="color: #90C3F3">换一张</p>
        </div>
      </div>
      <div class="div1">
        <p>温馨提示, 未注册过的账号, 登录时将自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
        <button class="btn btn-success" @click="register">登录</button>
      </div>
      <router-link :to="{path: '/reset'}" class="pull-right a1">重置密码?</router-link>
      <mt-popup v-model="no" :modal="false" :closeOnClickModal="false" class="wrong animated bounceIn">
        <i class="gth warn">&#xe60d;</i>
        <p class="ziti">{{bianliang ? '验证码不正确' : '密码不正确'}}</p>
        <button class="dianji" @click="affirm">确认</button>
      </mt-popup>
    </section>
</template>

<script>
    export default {
        name: "Login",
        data() {
          return {
            abc: false,
            site: '',
            account: '',
            password: '',
            authCode: '',
            no: false,
            bianliang: true
          }
        },
        methods: {
        hideP() {
          this.abc = !this.abc
        },
        changePicture() {
          this.$http({
            method: 'post',
            url: 'https://elm.cangdu.org/v1/captchas',
            withCredentials: true,
          }).then((res) => {
            this.site = res.data.code
          })
        },
          toAllCity() {
          this.$router.go(-1);
          },
          register() {
              this.$http({
                method: 'post',
                url: 'https://elm.cangdu.org/v2/login',
                withCredentials: true,
                data: {
                  captcha_code: this.authCode,
                  password: this.password,
                  username: this.account
                }
              }).then((res) => {
                switch (res.data.message) {
                  case '验证码不正确': {
                    this.no = true;
                    this.bianliang = true;
                      break;
                  }
                  case '密码错误': {
                    this.no = true;
                    this.bianliang = false;
                    break;
                  }
                  default: {
                    console.log(res.data);
                    this.$router.push({path: '/allCity'})
                    localStorage.setItem("success",JSON.stringify(res.data));
                    break;
                  }
                }
              })
          },
          affirm() {
            this.no = false;
          }
      },
      mounted() {
          this.$http({
            method: 'post',
            url: 'https://elm.cangdu.org/v1/captchas',
            withCredentials: true,
          }).then((res) => {
            this.site = res.data.code
          })
      }
    }
</script>

<style scoped>
section {
  width: 100%;
  position: relative;
}
.head{
  width: 104%;
  height: 0.5rem;
  line-height: 0.5rem;
  background-color: #008de1;
  color: white;
}
.head > span {
  font-size: 0.2rem;
}
  input {
    width: 100%;
    height: 0.6rem;
    font-size: 0.2rem;
    padding-left: 0.2rem;
  }
.inp1 {
  margin-top: 0.5rem;
}
  .p1 {
    width: 0.3rem;
    height: 0.3rem;
    background-color: blue;
    border-radius: 50%;
    background-color: #F1F1F1;
    position: absolute;
    top: 1.25rem;
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
  top: 1.3rem;
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
    top: 1.8rem;
    right: 0.1rem;
  }
  .face>p {
    font-size: 0.15rem;
  }
  .img1 {
    width: 1rem;
    position: absolute;
    top: 1.85rem;
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
  .wrong {
    width: 80%;
    height: 1.7rem;
    text-align: center;
    position: absolute;
    top: 60%;
    left: 0.35rem;
  }
  .warn {
    font-size: 0.5rem;
    color: orange;
  }
  .ziti {
    color: black;
    font-size: 0.25rem;
    font-weight: 900;
  }
  .dianji {
    width: 100%;
    height: 0.45rem;
    background-color: green;
    color: white;
    font-size: 0.25rem;
    margin-top: 0.1rem;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
  }
</style>

