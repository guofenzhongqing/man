<template>
    <section>
      <div class="head">
        <i class="jiantouL" @click="get">&#xe6bc;</i>
        <span>兑换红包</span>
      </div>
      <div class="in">
        <input type="text" placeholder=" 请输入兑换码" class="i1" v-model="S1"><br>
        <input type="text" placeholder=" 验证码" class="i2" v-model="S2">

        <div class="changeImg" @click="changeImg">
          <img :src="img&&img"/>
          <span>看不清</span>
          <p>换一张</p>
        </div>
      </div>
      <div class="foot">
        <button @click="login">兑换</button>
      </div>
      <!--弹出框-->

         <div class="dis"  v-if="!popupVisible">
           <div class="topT">
             <i class="iconfont7">&#xe611;</i>
             <p>{{project1}}</p>
           </div>
           <button class="btn1" @click="none">确定</button>
         </div>

    </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "DH_Red",
      data(){
          return {
            project:{},
            S1:'',
            S2:'',
            img:'' ,//储存验证码图片,
            popupVisible:true, // 判断弹框是否显隐,
            project:''
          }
      },
      created(){
        // 发起请求获取验证码
        this.changeImg();
        //获取用户信息
        if (localStorage.getItem('personObj')!==null){
          this.project=JSON.parse(localStorage.getItem('personObj'))
          console.log(this.project)
        }
      },
      methods:{
          get(){
            window.history.go(-1)
        },
        changeImg(){
          // 发起请求获取验证码
          const url = "https://elm.cangdu.org/v1/captchas";
          this.$http({
            method: 'post',
            url: url,
            withCredentials: true,
          }).then((res) => {
            // console.log('tap', res);
            this.img = res.data.code
          });
        },
        // 点击判断兑换码
        login() {
          const api = "https://elm.cangdu.org/v1/users/"+this.project.user_id+"/hongbao/exchange";
          this.$http({
            method: 'post',
            url: api,
            withCredentials: true,
            data: {
              exchange_code :this.S1,
              captcha_code:this.S2
            },
          }).then(res => {
            console.log(res);
            this.project1=res.data.message
           this.popupVisible=false;
          })
        },
        none(){
          this.popupVisible=true
        }
      },
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 100%;
    background-color: #EBEBEB;
  }
  .jiantouL{
    font-family:"iconfont" !important;
    font-size:0.26rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float:left;
    color: white;
  }
  .head{
    width: 100%;
    height: 0.5rem;
    background-color: #008de1;
    line-height:0.5rem ;
    font-size: 0.2rem;
    position: fixed;
    top: 0;
    z-index: 2;
  }
  .head span{
    color: white;
  }
  .in{
    width: 100%;
    position: absolute;
    top: 0.5rem;
    left: 0.2rem;
  }
  input{
    margin-top: 0.2rem;
    height: 0.4rem;
     border-radius: 0.05rem;
  }
  .i1{
  width:90%;
  }
  .i2{
    width: 48%;
  }
  .changeImg{
    margin-left: 0.1rem;
    width: 39%;
    font-size: 0.13rem;
    background-color: white;
    height: 0.4rem;
    border-radius: 0.05rem;
    position: absolute;
    top: 0.81rem;
    left: 1.8rem;
  }
  .changeImg>p{
    color: rgb(59, 149, 233);
    position: absolute;
    left: 0.95rem;
    top: 0.2rem;
  }
  .changeImg>span{
    font-size: 0.14rem;
    float: right;
    padding-right: 0.1rem;
  }
  .changeImg>p{
    font-size: 0.14rem;
  }
  .foot{
    width: 100%;
    text-align: center;
    position: absolute;
     top: 2rem;
    right: 0.2rem;
  }
  .foot button{
    width: 3rem;
    height: 0.36rem;
    border-radius: 0.05rem;
    margin-left: 0.25rem;
  }
  .dis{
    width: 70%;
    height: 1.4rem;
    background-color: white;
    position: absolute;
    top: 1.6rem;
    left: 0.6rem;
    text-align: center;
    border-top-left-radius: 0.1rem;
    border-top-right-radius: 0.1rem;
  }
  .iconfont7{
    font-family:"iconfont" !important;
    font-size:0.7rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: orange;
  }
  .btn1{
    width: 100%;
    height: 0.4rem;
    color: white;
    font-size: 0.18rem;
    margin-top: 0.1rem;
    background-color: green;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
  }
</style>
