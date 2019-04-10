<template>
  <section>
    <div class="head">
      <i class="iconfont" @click="get">&#xe6bc;</i>
      <span>选择地址</span>
    </div>
    <div class="address">
      <ul>
        <li v-for="item in addressArr" @click="addressMsg(item)">
          <p class="name">
            <span>{{item.name}}</span>
            <span>{{item.sex == 2 ? '女士': '先生'}}</span>
            <span>{{item.phone}}</span>
          </p>
          <p class="tag">
            <span :class="{colorBlue:true}">{{item.tag}}</span>
            <span>{{item.address_detail}}</span>
          </p>
        </li>
      </ul>
    </div>
    <router-link class="foot" :to="{name:'car_tj'}">
      <i class="iconfont1">&#xe645;</i>
      <span>新增收货地址</span>
    </router-link>
  </section>

</template>

<script>
  import Vue from 'vue'
    export default {
        name: "car_address",
      data(){
          return {
            addressArr: [],// 地址列表
            userId:''// 用户ID

          }
      },
      created(){
        this.userId = JSON.parse(localStorage.getItem('success')).id
        // 发起请求获取收货地址列表
        Vue.axios.get('https://elm.cangdu.org/v1/users/'+ this.userId + '/addresses').then(res => {
          console.log(res.data)
          this.addressArr = res.data;
          // console.log(this.addressArr)
        })

      },
      methods:{
          get(){
            window.history.go(-1)
          },
        addressMsg(i){
          this.$store.state.address = i
          history.go(-1)
        }
      }
    }
</script>

<style scoped>
  .iconfont{
    font-family:"iconfont" !important;
    font-size:0.26rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float:left;
    color: white;
  }
  .iconfont1{
    font-family:"iconfont" !important;
    font-size:0.24rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: lightcoral;
  }
  .head{
    width: 100%;
    height: 0.5rem;
    background-color: #008de1;
    line-height:0.5rem ;
    font-size: 0.2rem;
    text-align: center;
    color: white;
  }
  .foot{
    width: 100%;
    height: 0.45rem;
    position: fixed;
    bottom: 0;
    text-align: center;
    line-height: 0.45rem;
  }
  .foot span{
    color: #008de1;
    font-size: 0.18rem;
  }
  .address{
    width: 100%;
  }
  .address > ul {
    width: 100%;
    padding: 0;
    list-style: none;
  }
  .address > ul li{
    width: 100%;
    margin: 0 auto;
    padding: 0.1rem 0.4rem;
    border-bottom: 0.005rem solid lightgray;
  }
  .name span:nth-child(1){
    font-size: 0.2rem;
    font-weight: bold;
  }
  .tag span:nth-child(1){
    color: white;
    padding: 0.03rem;
    border-radius: 0.03rem;
  }
  .tag span:nth-child(2){
    color: gray;
  }
  .colorBlue{
    background-color: #3190E8;
  }
  .colorRed{
    background-color: red;
  }
  .colorGreen{
    background-color: rgb(92,184,92);
  }
</style>
