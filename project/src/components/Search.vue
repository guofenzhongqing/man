<template>
    <section>
      <!--头部-->
      <div class="head">
        <!--左边箭头-->
        <i class="jiantouL" @click="getBack">&#xe6bc;</i>
        <span>搜索</span>
      </div>
      <!--搜索框-->
      <div class="input">
        <input type="text" placeholder="请输入商家或美食名称" v-model="num"/>
        <button @click="sub">提交</button>
      </div>
      <div v-if="vanish">
        <p class="shop">商家</p>
        <li v-for="pro in shop" class="vowels" @click="homologous(pro)">
          <img :src="'https://elm.cangdu.org/img/'+pro.image_path" alt="" class="img">
          <p class="p1">
            <span>{{pro.name}}</span>
            <span style="color: #FF9F65;border: 0.01rem solid #FF6000;transform: skew(-20deg);text-align: center;font-size: 0.12rem;margin-left: 0.03rem">支付</span>
          </p>
          <p class="p2">月售{{pro.recent_order_num}}单</p>
          <p class="p3">
            <span>{{pro.float_minimum_order_amount}}元起送 /</span>
            <span>距离{{pro.distance}}</span>
          </p>
        </li>
      </div>
      <div style="border-bottom: 0.01rem solid lightgrey" v-if="histo">
        <p class="shop">搜索历史</p>
        <li v-for="(pro,index) in content" class="history" @click="parallelism(pro)">
          <span style="margin: 0.02rem 0 0 0.15rem;font-size: 0.18rem">{{pro}}</span>
          <i class="cuohao" style="margin: 0.02rem 0.15rem 0 0;font-size: 0.18rem" @click.stop="assign(index)">&#xe632;</i>
        </li>
        <p class="delete" @click="empty">清空搜索历史</p>
      </div>
      <p class="shop" v-if="without" style="text-align: center">很抱歉! 无搜索结果</p>
    </section>
</template>

<script>
  import Vue from 'vue';
    export default {
      name: "Search",
      data() {
        return {
          num: '',
          shop: [],
          vanish: false,
          content: [],
          histo: false,
          without: false,
          data: []
        }
      },
      methods: {
        //  返回
        getBack() {
          this.$router.go(-1);
        },
        sub() {
            if (this.num == '') {
               this.vanish = false;
            } else {
              let obj = JSON.parse(localStorage.getItem("city")).geohash
              let url = 'https://elm.cangdu.org/v4/restaurants?geohash=' + obj + '&keyword=' + this.num;
              Vue.axios.get(url).then((res) => {
                console.log(res.data)
                this.shop = res.data;
                this.vanish = true
              }).catch((error) => {
                console.log(error);
              })
              let comment = this.num
              let list = JSON.parse(localStorage.getItem('number1') || '[]')
              list.unshift(comment)
              let set = new Set(list)
              localStorage.setItem('number1',JSON.stringify(set))
            }
        },
        assign(i) {
          this.content.splice(i, 1)
          if (this.content.length != 0) {
            this.histo = true;
          } else {
            this.histo = false;
          }
          localStorage.setItem('number1', JSON.stringify(this.content))
        },
        empty() {
          this.content.splice(0, this.content.length)
          if (this.content.length != 0) {
            this.histo = true;
          } else {
            this.histo = false;
          }
          localStorage.removeItem('number1')
        },
        parallelism(p) {
          this.num = p;
          let obj = JSON.parse(localStorage.getItem("city")).geohash
          let url = 'https://elm.cangdu.org/v4/restaurants?geohash='+obj+'&keyword='+ p;
          Vue.axios.get(url).then((res) => {
            console.log(res.data)
            this.shop = res.data;
            this.vanish = true
          }).catch((error) => {
            console.log(error);
          })
        },
        homologous(h) {
          this.$router.push({path: '/store'});
          this.$store.commit('information', h);
        }
      },
      mounted() {
          if (JSON.parse(localStorage.getItem("number1")) == "[]") {
          this.histo = false
          } else {
          this.content =  JSON.parse(localStorage.getItem("number1"))
          this.histo = true;
          }
        }
      }
</script>

<style scoped>
  section {
    width: 100%;
  }
  .head{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #008de1;
    color: white;
    font-size: 0.2rem;
    text-align: center;
    overflow: hidden;
    position: fixed;
    z-index: 2;
  }
  /*箭头*/
  .jiantouL{
    float: left;
    font-size: 0.2rem;
  }
  /*外层包裹的div*/
  .input{
    display: flex;
    justify-content: center;
  }
  /*输入框*/
  input{
    -webkit-border-radius: 0.05rem;
    -moz-border-radius: 0.05rem;
    border-radius: 0.05rem;
    background: lightgrey;
    width: 70%;
    height: .4rem;
    margin-right: .1rem;
    margin-top: .5rem;
    padding-left: 0.1rem;
    font-size: 0.18rem;
  }
  /*按钮*/
  button{
    width: 20%;
    height: .4rem;
    background: #008de1;
    border-radius: .05rem;
    margin-top: .5rem;
    color:white;
  }
  /*搜索出来显示的结果*/
  .shop {
    font-size: 0.16rem;
    padding: 0.1rem 0 0.1rem 0.15rem;
    background-color: #F5F5F5;
    margin-top: 0.1rem;
  }
  .img {
    width: 0.4rem;
  }
  .vowels {
    width: 100%;
    position: relative;
    padding: 0.1rem;
    height: 1rem;
    border-bottom: 0.01rem solid #ECECEC;
  }
  .p1 {
    width: 100%;
    position: absolute;
    top: 0.08rem;
    left: 0.55rem;
  }
  .p2 {
    width: 100%;
    position: absolute;
    top: 0.34rem;
    left: 0.55rem;
    font-size: 0.13rem;
  }
  .p3 {
    width: 100%;
    position: absolute;
    top: 0.57rem;
    left: 0.55rem;
    border-bottom: 0.01rem solid #ECECEC;
    padding-bottom: 0.05rem;
  }
  .p1>span {
    font-size: 0.13rem;
    display: inline-block;
  }
  .p3>span {
    font-size: 0.13rem;
    display: inline-block;
  }
  .history {
    width: 100%;
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.01rem solid lightgrey;
  }
  .delete {
    width: 100%;
    text-align: center;
    color: #008de1;
    font-size: 0.2rem;
   padding: 0.06rem 0 0 0;
  }
</style>
