<template>
    <section>
      <div class="head">
        <i class="jiantouL" @click="getBack">&#xe6bc;</i>
        <span class="account">账户信息</span>
      </div>
      <div style="background-color: white;width: 100%;height: 0.6rem;border-top: 0.01rem solid gray">
        <p class="touxiang">头像</p>
        <div class="photo">
        <img :src="picture" alt="" class="picture">
        <i class="jiantouR" >&#xe74c;</i>
        </div>
        <input type="file" style="width: 100%;height: 0.6rem;opacity: 0;z-index: 5;">
      </div>
      <div class="portrait" @click="username">
        <p class="ziti">用户名</p>
        <div>
          <span style="font-size: 0.2rem;color: gray;">{{name}}</span>
          <i class="jiantouR">&#xe74c;</i>
        </div>
      </div>
      <div class="portrait" style="border-bottom: 0.01rem solid gray" @click="redact">
        <p class="ziti">收货地址</p>
        <i class="jiantouR">&#xe74c;</i>
      </div>
      <p class="binding">账号绑定</p>
      <div class="portrait" style="border-bottom: 0.01rem solid gray;height: 0.65rem" @click="dot">
        <div>
          <p style="float: left;padding: 0.02rem;background-color: #008de1;color: white;border-radius: 10%">
            <i class="iphone" style="font-size: 0.2rem">&#xe608;</i>
          </p>
          <p style="float: right;font-size: 0.15rem;font-weight: 600;margin: 0.06rem 0 0 0.1rem">手机</p>
        </div>
        <i class="jiantouR" >&#xe74c;</i>
      </div>
      <p class="binding">安全设置</p>
      <div class="portrait" style="height: 0.55rem" @click="skip">
        <p style="font-size: 0.18rem;font-weight: 600">登录密码</p>
        <div>
          <span style="font-size: 0.18rem;font-weight: 600;color: gray">修改</span>
          <i class="jiantouR">&#xe74c;</i>
        </div>
      </div>
      <div class="anniu">
        <button class="exit" @click="retreat">退出登录</button>
      </div>
      <mt-popup v-model="tankuang" :modal="false" :closeOnClickModal="false" class="wrong animated bounceIn">
        <i class="gth warn">&#xe60d;</i>
        <p class="typeface">请在手机APP中设置</p>
        <button class="dianji" @click="affirm">确认</button>
      </mt-popup>
      <mt-popup v-model="dropOut" :modal="false" :closeOnClickModal="false" class="quit animated bounceIn">
        <i class="gth exit1">&#xe60d;</i>
        <p class="secede">是否退出登录</p>
        <button class="retreat" style="background-color: gray;" @click="rank">再等等</button>
        <button class="retreat" style="background-color: darkred;" @click="withdraw">退出登录</button>
      </mt-popup>
    </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "MyInfo",
        data() {
          return {
            picture: '',
            name: '',
            tankuang: false,
            dropOut: false
          }
        },
        mounted() {
          let obj = JSON.parse(localStorage.getItem("success"))
          this.picture = 'https://elm.cangdu.org/img/' + obj.avatar
          this.name = obj.username;
        },
      methods: {
        getBack() {
          this.$router.go(-1);
        },
        username() {
          this.$router.push({name: 'username'})
        },
        redact() {
          this.$router.push({name: 'compile'})
        },
        affirm() {
          this.tankuang = false;
        },
        dot() {
          this.tankuang = true;
        },
        skip() {
          this.$router.push({path: '/reset'})
        },
        retreat() {
          this.dropOut = true
        },
        rank() {
          this.dropOut = false
        },
        withdraw() {
          Vue.axios.get('https://elm.cangdu.org/v2/signout', null).then((res) => {
            if (res.data.message = '退出成功') {
              localStorage.removeItem('success');
              this.$router.push({path: '/all/head'});
            }
          }).catch((error) => {
            console.log(error);
          })
        }
      }
    }
</script>

<style scoped>
section{
  width: 100%;
  height: 100%;
  background-color: gainsboro;
  padding-top: 0.7rem;
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
  .jiantouL{
    margin-left: 0.1rem;
    color: white;
    font-size: 0.2rem;
  }
  .account {
    font-size: 0.2rem;
    color: white;
    margin-left: 1.1rem;
  }
  .portrait {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-top: 0.01rem solid gray;
    padding: 0.15rem 0.1rem;
  }
  .picture {
    width: 0.4rem;
    float: left;
    border-radius: 50%;
  }
  .ziti {
    font-size: 0.15rem;
    font-weight: 600;
    margin: auto 0;
  }
  .jiantouR {
    font-weight: 600;
    font-size: 0.18rem;
    color: gray;
    margin-left: 0.05rem;
  }
  .binding {
    margin: 0.1rem;
    font-size: 0.2rem;
  }
  .anniu {
    width: 90%;
    margin: 0.2rem auto;
  }
  .exit {
    width: 100%;
    height: 0.4rem;
    background-color: red;
    color: white;
    border-radius: 0.05rem;
    font-size: 0.18rem;
  }
  .touxiang {
    position: absolute;
    top: 0.88rem;
    left: 0.1rem;
    font-size: 0.15rem;
    font-weight: 600;
  }
  .photo {
    position: absolute;
    top: 0.8rem;
    right: 0.1rem;
    height: 0.4rem;
    line-height: 0.4rem;
  }
.wrong {
  width: 80%;
  height: 1.7rem;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 0.35rem;
}
.warn {
  font-size: 0.5rem;
  color: orange;
}
.typeface {
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
.quit {
  width: 94%;
  height: 2.5rem;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 3%;
}
.exit1 {
  font-size: 1rem;
  color: orange;
}
.secede {
  color: black;
  font-size: 0.25rem;
  font-weight: 900;
}
.retreat {
  width: 30%;
  border-radius: 0.04rem;
  height: 0.4rem;
  color: white;
  font-size: 0.18rem;
  margin: 0.2rem 0 0 0.1rem;
}
</style>
