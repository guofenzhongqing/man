<template>
    <section>
      <!--头部-->
      <nav class="nav">
        <span class="glyphicon glyphicon-menu-left pull-left" aria-hidden="true" @click="back"></span>
        <span>商家详情</span>
      </nav>
      <div class="active">
        <p>活动与属性</p>
      </div>
      <div class="overless">
        <div>
          <p v-for="item in storeMsg.activities">
            <span class="redCode">{{item.icon_name}}</span>
            <span>{{item.description}}(APP专享)</span>
          </p>
          <div v-for="item in storeMsg.supports">
            <span class="blueCode">{{item.icon_name}} </span>
            <span> {{item.description}}(APP专享)</span>
          </div>
        </div>
      </div>
      <div class="supervise">
        <p>食品监督安全公示</p>
        <div @click="goToShopSafe">
          <span>企业认证详情</span>
          <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
        </div>
      </div>
      <div class="check">
        <i class="iconfont">&#xe6e2;</i>
        <div>
          <p>监督检查结果: <span class="i">良好</span></p>
          <p>检查日期:</p>
        </div>
      </div>
      <div class="shopMsg">
        <p>商家信息</p>
        <p>{{storeMsg.name}}</p>
        <p>{{storeMsg.address}}</p>
        <p>营业时间: {{storeMsg.opening_hours[0]}}</p>
        <p @click="showImg">营业执照 <span class="glyphicon glyphicon-menu-right pull-right go" aria-hidden="true"></span></p>
        <p @click="showImg1">餐饮服务许可证<span class="glyphicon glyphicon-menu-right pull-right go" aria-hidden="true"></span></p>
        <img :src="storeMsg.license.business_license_image == null ? '' : 'https://elm.cangdu.org/img/'+ storeMsg.license.business_license_image" class="img" v-if="isShow" @click="hidden">
        <img :src="storeMsg.license.catering_service_license_image == null ? '' : 'https://elm.cangdu.org/img/'+ storeMsg.license.catering_service_license_image" class="img" v-if="isShow1" @click="hidden1">
      </div>

    </section>
</template>

<script>
    export default {
        name: "StoreDetails",
      data(){
        return{
          storeMsg:{}, //商铺信息
          isShow:false,// 营业执照图片是否显示
          isShow1:false
        }
      },
      created(){
          if (localStorage.getItem("storeObj") !== null){
            this.storeMsg = JSON.parse(localStorage.getItem("storeObj"));
            console.log(this.storeMsg)
          }
      },
      methods:{
          back(){
            history.go(-1)
          },
        goToShopSafe(){
          this.$router.push({name:'safe'})
        },
        // 显示营业执照
        showImg(){
          this.isShow = true;
        },
        hidden(){
          this.isShow = false;
        },
        showImg1(){
          this.isShow1 = true;
        },
        hidden1(){
          this.isShow1 = false;
        }
      }
    }
</script>

<style scoped>
section{
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}
  .nav{
    background-color: #3190E8;
    width: 100%;
    height: 0.4rem;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    line-height: 0.4rem;
  }
.nav .pull-left{
  color: white;
  font-size: 0.2rem;
  line-height: 0.4rem;
  margin-left: 0.05rem;
  }
  .nav span+span{
    color: white;
    font-size: 0.17rem;
  }
  .active{
    width: 100%;
    height: 0.4rem;
    padding-top: 0.5rem;
  }
.active>p{
  width: 100%;
  height: 0.35rem;
  line-height: 0.35rem;
  background-color: white;
  font-size: 0.16rem;
  padding-left: 0.1rem;
  box-shadow:0 0.01rem 0.01rem lightgray,
  0 0.001rem 0.001rem lightgray;
}
  .overless{
    width: 100%;
    background-color: white;
    margin-top: 0.36rem;
    box-shadow:0 0.01rem 0.001rem lightgray;
  }
  .overless >div {
    width: 95%;
    margin: 0 auto;
    font-size: 0.12rem;
    padding: 0.1rem 0;
  }
.overless >div>p:nth-child(1) .redCode{
    background-color: red;
  border-radius: 0.02rem;
  color: white;
  padding: 0.01rem;
  }
.overless >div>p:nth-child(2) .redCode{
  background-color: green;
  border-radius: 0.02rem;
  color: white;
  padding: 0.01rem;
}
.overless >div>p:nth-child(3) .redCode{
  background-color: yellow;
  border-radius: 0.02rem;
  color: white;
  padding: 0.01rem;
}
.blueCode{
  background-color: gray;
  border-radius: 0.02rem;
  color: white;
  padding: 0.01rem;
}
  .supervise{
    width: 100%;
    height: 0.4rem;
    padding-top: 0.1rem;display: flex;
  }
.supervise>p{
  width: 70%;
  height: 0.35rem;
  line-height: 0.35rem;
  background-color: white;
  font-size: 0.16rem;
  padding-left: 0.1rem;
}
  .supervise>div{
    width: 30%;
    font-size: 0.14rem;
    color: gray;
    height: 0.35rem;
    line-height: 0.35rem;
    background-color: white;
  }
.iconfont{
  font-family:"iconfont" !important;
  font-size:0.5rem;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;}
  .check{
    display: flex;
    width: 100%;
    height: 0.8rem;
    background-color: white;
    border-top: 0.065rem solid lightgray;
    padding: 0.1rem 0;
  }
  .check>i, .i{
    color: green;
  }
.check>div{
  margin-left: 0.05rem;
}
  .shopMsg{
    width: 100%;
    margin-top: 0.03rem;
  }
.shopMsg > p{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 0.35rem;
  line-height: 0.35rem;
  background-color: white;
  border-bottom: solid 0.01rem lightgray;
  padding-left: 0.05rem;
}
  .go{
    line-height: 0.35rem;
    color: gray;
    font-size: 0.16rem;
    margin-right: 0.05rem;
  }
  .img{
    width: 100%;
    /*background-color: rgba(0, 0, 0, 0.1);*/
    opacity: 0.5;
    position: absolute;
    left: 0;
    top: 20%;
  }
</style>
