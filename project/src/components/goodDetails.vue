<template>
    <section>
      <nav>
        <span class="glyphicon glyphicon-menu-left pull-left back" aria-hidden="true" @click="get"></span>
        <span>{{goods.name}}</span>
      </nav>
      <img :src="http + goods.image_path" class="img">
      <div>
        <p>{{goods.description}}</p>
        <p>{{goods.name}}</p>
        <p>
          <el-rate
            v-model="goods.rating"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </p>
        <p>
          <span>评论数:{{goods.satisfy_count}} </span>
          <span>好评率:{{goods.satisfy_rate}}%</span>
        </p>
      </div>
    </section>
</template>

<script>
    export default {
        name: "goodDetails",
      data(){
          return {
            goods:this.$store.state.goodDetails,
            http: 'https://elm.cangdu.org/img/',
          }
      },
      created(){
          console.log(this.$store.state.goodDetails)
      },
      methods:{
          get(){
            history.go(-1)
          }
      }
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 100%;
  }
  nav{
    width: 100%;
    height: 0.5rem;
    background-color: #3190E8;
    color: white;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.18rem;
  }
  .back{
    line-height: 0.5rem;
    margin-left: 0.1rem;
  }
  .img{
    width: 100%;
  }
</style>
