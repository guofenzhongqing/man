<template>
<section>
  <div class="head">
    <i class="jiantouL" @click="getBack">&#xe6bc;</i>
    <span class="account">修改用户名</span>
  </div>
  <div style="width: 94%;margin: 0 auto">
    <input type="text" class="inp1" placeholder="输入用户名" v-model="username" :class="{border: text}" @input="judge">
    <p class="xiugai" :style="{color: text ? colorRed : color}" :class="{font: text}">{{text ? '用户名长度在5到24位之间' : '用户名只能修改一次 (5-24字符之间)'}}</p>
    <button class="queren" :class="{bgc: !text}" @click="toAccount">确认修改</button>
  </div>
</section>
</template>

<script>
    export default {
        name: "Username",
        data() {
          return {
            username: '',
            text:'',
            color: 'gray',
            colorRed:'red',
            personMsg: JSON.parse(localStorage.getItem("enter"))
          }
        },
        methods: {
          getBack() {
            this.$router.go(-1);
          },
            judge(){
              //判断输入框的值是否合乎长度,
              if (this.username.length < 5 || this.username.length >24){
                this.text = true
              }else {
                this.text = false
              }
            },
            toAccount(){
            if (this.username.length < 5 || this.username.length >24.) {
              this.text = true;
            } else {
              this.text = false;
              this.$router.push({name:'myInfo'})
              this.personMsg.username = this.username;
              this.$store.commit("message",this.personMsg);
            }

            }
          }
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 100%;
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
  .inp1 {
    width: 100%;
    height: 0.4rem;
    border-top: 0.02rem solid lightgrey;
    border-left: 0.01rem solid lightgrey;
    border-right: 0.01rem solid lightgrey;
    border-bottom: 0.01rem solid lightgrey;
    font-size: 0.13rem;
    padding-left: 0.05rem;
  }
  .xiugai {
    margin-top: 0.1rem;
    font-size: 0.15rem;
    color: gray;
  }
  .queren {
    width: 100%;
    height: 0.4rem;
    font-size: 0.18rem;
    margin-top: 0.2rem;
    background-color: #008de1;
    color: lightgrey;
    transition: color 1s;
  }
  .bgc {
    color: white;
    transition: color 1s;
  }
  .border {
    border: 0.01rem solid red;
  }
  .font {
    font-size: 0.2rem;
  }
</style>
