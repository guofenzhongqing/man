<template>
  <section>
    <div class="head navbar-fixed-top">
      <span class="glyphicon glyphicon-chevron-left" style="margin-left: 0.05rem" @click="toLogin"></span>
      <span style="margin-left: 1.2rem">重置密码</span>
    </div>
    <div style="margin-top: 0.52rem"><input type="text" placeholder="账号" v-model="username"></div>
    <div style="border: 0.01rem solid lightgrey"><input type="text" placeholder="旧密码" v-model="oldPassword"></div>
    <div><input type="text" placeholder="请输入新密码" v-model="newPassword"></div>
    <div style="border: 0.01rem solid lightgrey"><input type="text" placeholder="请确认密码" v-model="notarize "></div>
    <div>
      <input type="text" placeholder="验证码" v-model="code">
      <img :src="changePic" alt="" class="img1">
      <div class="changeP" @click="changeP">
        <p class="p1">看不清</p>
        <p class="p2" style="color: #90C3F3">换一张</p>
      </div>
    </div>
    <div class="butt">
      <button class="btn btn-success" @click="conf">确认修改</button>
    </div>
    <mt-popup v-model="buer" :modal="false" :closeOnClickModal="false" class="wrong animated bounceIn">
      <i class="gth warn">&#xe60d;</i>
      <p class="ziti">{{content}}</p>
      <button class="dianji" @click="affirm">确认</button>
    </mt-popup>
  </section>
</template>

<script>
  export default {
    name: "Reset",
    data() {
      return {
        changePic: '',
        username:'',
        oldPassword: '',
        newPassword: '',
        notarize:'',
        code:'',
        content: '',
        buer: false
      }
    },
    mounted() {
      this.$http({
        method: 'post',
        url: 'https://elm.cangdu.org/v1/captchas',
        withCredentials: true,
      }).then((res) => {
        this.changePic = res.data.code
      })
    },
    methods: {
      changeP() {
        this.$http({
          method: 'post',
          url: 'https://elm.cangdu.org/v1/captchas',
          withCredentials: true,
        }).then((res) => {
          this.changePic = res.data.code
        })
      },
      toLogin() {
        this.$router.go(-1);
      },
      conf() {
        this.$http({
          method: 'post',
          url: "https://elm.cangdu.org/v2/changepassword",
          withCredentials: true,
          data: {
            username: this.username,
            oldpassWord: this.oldPassword,
            newpassword: this.newPassword,
            confirmpassword: this.notarize,
            captcha_code: this.code
          }
        }).then((res) => {
          this.buer = true
          if (res.data.success == '密码修改成功') {
              this.content = res.data.success;
          } else {
              this.content = res.data.message
          }
        })
      },
      affirm() {
        this.buer = false;
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
    top: 2.55rem;
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
