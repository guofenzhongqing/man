<template>
    <section>
      <div class="hear">
        <div class="col-xs-4">
          <p class="p1">{{productOne}}</p>
          <p class="p2">综合评价</p>
          <p class="p3">高于周边商家{{productTwo}}</p>
        </div>
        <div class="col-xs-8">
          <span class="s1">服务态度</span>
          <el-rate
            v-model="productSan"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
          <p>菜品评价</p>
          <el-rate
            v-model="productSi"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
          <span>送达时间</span>
          <span>{{productWu}}分</span>
        </div>
      </div>

      <div class="content" >
        <p v-for="(item1,i) in productSix" @click="leftChange(i)" :class="{style:changeLeftBackground === i}" class="p10">
          {{item1.name}}({{item1.count}})
        </p>
      </div>

      <div class="footer" v-for="it in productQ" >
      <div class="one">
        <img :src="it.avatar == '' ? 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1200085042,4250469493&fm=26&gp=0.jpg' : http+it.avatar+'.jpeg'">
        <span>{{it.username}}</span>
        <span class="span1">{{it.rated_at}}</span>
        <span>{{it.time_spent_desc}}</span>
        <el-rate
          v-model="it.rating_star"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </div>
        <div class="two">
          <img v-for="it3 in it.item_ratings" :src="it3.image_hash.slice(-4).endsWith('png')===true?http+it3.image_hash+'.png':http+it3.image_hash+'.jpeg'" v-if="it3.image_hash==''? false : true"><br>
          <p v-for="it2 in it.item_ratings
">{{it2.food_name}}</p>
        </div>
      </div>
    </section>
</template>

<script>
   import Vue from 'vue'
    export default {
        name: "Evaluation",
        data(){
          return {
            productOne:'',
            productTwo:'',
            productSan:'',
            productSi:'',
            productWu:'',
            productSix:[],
            productQ:[],
            changeLeftBackground:0,
            http:'https://fuss10.elemecdn.com/'
          }
        },
      methods:{
        leftChange(index) {
          this.changeLeftBackground = index;
        },
      },
      created(){
        Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10').then((e)=>{
          console.log(e.data)
          this.productQ=e.data
          console.log()
        })
        //获取评分 星级
        Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores').then((e)=>{
          this.productOne=Math.floor(e.data.food_score*10)/10
          this.productTwo=Math.floor(e.data.compare_rating*100)+'%'
          this.productSan=Math.floor(e.data.overall_score*10)/10
          this.productSi=Math.floor(e.data.food_score*10)/10
          this.productWu=e.data.deliver_time
        })
        Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags').then((e,q)=>{
        // console.log(e)
          this.productSix=e.data
        })
      }
    }
</script>

<style scoped>
  .hear{
    width: 100%;
    height: 1.8rem;
    text-align: center;
  }
  .col-xs-8{
    margin-top: 0.2rem;
  }
.p1{
  color: red;
  font-size: 0.3rem;
  text-align: center;
  margin-top: 0.2rem;
}
  .p2{
    text-align: center;
    font-size: 0.2rem;
  }
  .p3{
    font-size: 0.12rem;
    color: gray;
  }
  .el-rate_icon,.el-icon-star-on{
    font-size: 0.01rem;
    width: 0.005rem;
  }
 .content{
 margin-left: 0.08rem;
   width: 100%;
   height: 1.3rem;
 }
  .footer{
    height: 1.8rem;
    width: 100%;
    border-top: 0.005rem solid gray;
  }
  .p10{
    width: 0.875rem;
    height: 0.3rem;
    float: left;
    border-radius: 0.05rem;
    background-color: cornflowerblue;
    margin-right: 0.03rem;
    margin-top: 0.02rem;
    text-align: center;
    line-height: 0.3rem;
  }
 .span1{
   float: right;
 }
  .style {
    background-color:red;
  }
  .one{
    margin-left: 0.5rem;
  }
  .one img{
    width: 0.5rem;
    margin-left: -0.5rem;
    border-radius: 50%;
  }
  .two{
    margin-left: 0.5rem;
    table-layot:fixed；
  }
  .two img{
    width: 0.6rem;
  }
  .two>p{
    word-break:keep-all;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    width: 0.6rem;
    border: 0.01rem solid gray;
    border-radius: 0.03rem;
    float: left;
    margin-top: 0.08rem;
    margin-right: 0.06rem;
  }
</style>
