<template>
  <section>
    <div class="head">
      <i class="iconfont" @click="get">&#xe64b;</i>
      <span>选择</span>
    </div>
    <div class="SS">
      <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="DZ" class="form-control">
      <button class="btn btn-primary" @click="city">搜索</button>
    </div>
     <div class="NR" v-for="item in Arr" @click="div1(item)">
       <p>{{item.name}}</p>
       <p>{{item.address}}</p>
     </div>
  </section>

</template>

<script>
  import Vue from 'vue'
    export default {
        name: "car_DZ",
      data(){
          return {
            DZ:'',
            Arr:[],
            name:''
          }
      },
      methods:{
          get(){
            window.history.go(-1)
          },
        city(){
            if (this.DZ == ''){
              alert('请输入搜索地址')
            }else{
              Vue.axios.get('https://elm.cangdu.org/v1/pois?city_id='+this.$store.state.cityID+'&keyword='+this.DZ+'&type=search').then((res)=>{
                console.log(res.data);
                this.Arr=res.data;
              })
            }

        },
        div1(i){
            window.history.go(-1);
          this.$store.state.nameOne=i.name
        }
      },
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
  .head{
    width: 100%;
    height: 0.5rem;
    background-color: blue;
    line-height:0.5rem ;
    font-size: 0.2rem;
    text-align: center;
    color: white;
  }
  .SS{
    width: 95%;
    margin: 0.2rem auto;
    text-align: center;
    display: flex;
    justify-content: space-between;
  }
  .SS input{

  }
 .NR{
   margin-top: 0.2rem;
   margin-left: 0.1rem;
   border-bottom: 0.03rem solid lightgray;
 }
</style>
