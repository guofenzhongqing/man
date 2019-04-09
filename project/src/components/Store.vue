<template>
  <section>
    <!--头部-->
    <div class="header">
      <div class="shopMsg">
        <div class="storeMassage" @click="header">
          <div class="storeMassageChild">
            <i class="pin" @click="getBack">&#xe6bc;</i>
            <img :src="'https://elm.cangdu.org/img/' + storeMsg.image_path" alt="">
            <div class="shopMsgRight">
              <p>{{storeMsg.name}}</p>
              <p>
                <span>商家配送 /</span>
                <span> 分钟送达 / </span>
                <span>{{storeMsg.piecewise_agent_fee == null ? '' : storeMsg.piecewise_agent_fee.tips}}</span>
              </p>
              <p>公告: {{storeMsg.promotion_info}}</p>
            </div>
          </div>
          <div class="nextPage"><i class="el-icon-arrow-right"></i></div>
        </div>
        <!--满减优惠-->
        <div class="moneyOff" v-if="storeMsg.activities">
          <div>
            <span class="redCode">减</span>
            <span>{{storeMsg.activities.length != 0 ? storeMsg.activities[0].description : ''}} (APP专享)</span>
          </div>
          <div @click="shade" class="moneyOff-div">
            <span>{{storeMsg.activities.length != 0 ? storeMsg.activities.length : ''}}个活动</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <img :src="'https://elm.cangdu.org/img/' + storeMsg.image_path">
    </div>
    <!--弹出框-->
    <mt-popup v-model="popupVisible">
      <p  class="popup-p">{{storeMsg.name}}</p>
      <div  class="popup-div1">
        <p>优惠信息</p>
        <div v-for="d in storeMsg.activities" class="all">
          <span  class="popup-span">{{d.icon_name}}</span>
          <span class="popup-span2">{{d.description}} (APP专享)</span>
        </div>
      </div>

      <div class="popup-div2">商家公告</div>
      <span class="popup-span3">{{storeMsg.promotion_info}}</span>
      <i class="cuohao" @click="conceal">&#xe64c;</i>
    </mt-popup>

    <!--导航栏-->
    <nav class="navBar">
      <div @click="showShop" :class="{navClass: isTrue}">商品</div>
      <div @click="showAppraise" :class="{navClass: isTrue1}">评价</div>
    </nav>
    <XBT v-if="animation"></XBT>

    <router-view></router-view>
  </section>

</template>

<script>
  import Vue from 'vue'
  import XBT from "./shopcar/XBT";
    export default {
        name: "Store",
      components: {XBT},
      data(){
        return{
          storeMsg:{},
          popupVisible:false,
          isTrue:true,
          isTrue1:false,
          animation: true
        }
      },
      mounted(){
        this.animation = true;
        //发起网络请求 请求餐馆详情
        let id = JSON.parse(localStorage.getItem("storeObj")).id
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurant/'+id , null).then((j, v) => {
          this.animation = false;
          this.storeMsg = j.data;
          console.log(this.storeMsg)
        });
      },
      methods:{
        // goToDetails(){
        //   this.$router.push({name: 'details'})
        // },
        getBack() {
          this.$router.go(-1);
        },
        shade(){
          this.popupVisible = true
        },
        conceal(){
          this.popupVisible = false
        },
        //商品页面
        showShop(){
          this.$router.push({name: 'commodity'});
          this.isTrue = true;
          this.isTrue1 = false
        },
        // 评论页面
        showAppraise(){
          this.$router.push({name: 'evaluation'});
          this.isTrue = false;
          this.isTrue1 = true
        },
        header(){
          this.$router.push({name: 'StoreDetails'})
        }
      }
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 100%;
  }
  .moneyOff-div{
    z-index: 10;
  }
  .popup-p{
    font-size: 0.3rem;
    position: absolute;
    top: 0.5rem;
    left: 0;
    right: 0;
    text-align: center;
  }
  .popup-div1{
    position: absolute;
    top: 1.5rem;
    left: 1rem;
    padding: 0.05rem;
    font-size: 0.14rem;
  }
  .popup-div1>p{
    text-align: center;
    width: 0.8rem;
    border: 0.01rem solid white;
    -webkit-border-radius: 0.2rem;
    font-size: 0.14rem;
    padding: 0.05rem;
    margin-left: 0.4rem;
  }
  .popup-div2{
    font-size: 0.14rem;
    position: absolute;
    top: 2.5rem;
    left: 1.47rem;
    padding: 0.05rem;
    width: 0.8rem;
    border: 0.01rem solid white;
    -webkit-border-radius: 0.2rem;
    text-align: center;
  }

  .popup-span{
    top: 2rem;
    left: 0.2rem;
    background-color: #FF6600;
    padding: 0.01rem;
    border-radius: 0.05rem;
  }
  .popup-span2{
    top: 2rem;
    left: 0.4rem;
    padding: 0.01rem;
    border-radius: 0.05rem;
  }
  .popup-span3{
    top: 3rem;
    left: 0.58rem;
    position: absolute;
    padding: 0.01rem;
    border-radius: 0.05rem;
  }
  .cuohao{
    position: absolute;
    top: 5rem;
    left: 1.6rem;
    font-family:"iconfont" !important;
    font-size: 0.5rem;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .mint-popup span{
    font-size: 0.14rem;
  }
  .mint-popup{
    width: 100%;
    height: 100%;
    color: white;
    background-color: rgba(0,0,0,0.6);
  }
  .v-modal{
    opacity: 0.8;
  }
.header{
  width: 100%;
  height: 1.1rem;
  position: relative;
}
  .header>img{
    width: 100%;
    height: 100%;
    opacity: 0.1;
  }
  .shopMsg{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
  }
  .storeMassage{
    width: 94%;
    height: 80%;
    display: flex;
    align-items: center;
    margin: 0.03rem auto 0;
    font-size: 0.12rem;
  }
  .storeMassageChild{
    display: flex;
    align-items: center;
  }
  .storeMassage img{
    width: 20%;
    height: 0.7rem;
    border-radius: 0.05rem;
  }
  .shopMsgRight p{
    margin-left: 0.07rem;
    color: white;
  }
  .shopMsgRight p:nth-child(1){
    font-size: 0.16rem;
    font-weight: bold;
  }
  .moneyOff{
    width: 95%;
    font-size: 0.12rem;
    color: white;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }
  .redCode{
    background-color: red;
    padding: 0.01rem;
    border-radius: 0.02rem;
  }
  .nextPage{
    width: 0.05rem;
    font-size: 0.25rem;
    color: white;
    margin-right: 0.1rem;
  }
  .navBar{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: 0.01rem solid lightgray;
    display: flex;
    justify-content: space-around;
    font-size: 0.16rem;
  }
  .navClass{
    color: blue;
    font-weight: bold;
  }
  .all{
    margin-left: -0.5rem;
  }
  .storeMassageChild>i{
    float: left;
    color: white;
    font-size: 0.3rem;
    margin-top: -0.6rem;
    margin-left: -0.15rem;
  }
</style>
