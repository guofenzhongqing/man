<template>
    <section>
      <div class="head">
        <i class="iconfont" @click="get">&#xe64b;</i>
        <span>添加地址</span>
      </div>
      <span>联系人</span>
      <el-input v-model="input" placeholder="你的名字" class="input1" @input="judge" :class='{color:text}'></el-input>
      <p :style="{color:text ? color: colorRed}">{{text ?  '': '用户名不能为空'}}</p>
      <div class="sex">
        <el-radio v-model="radio" label="1">先生</el-radio>
        <el-radio v-model="radio" label="2">女士</el-radio>
      </div>
      <div class="phone">
        <span>联系电话</span>
        <el-input v-model="input1" placeholder="你的手机号" class="input2"></el-input>
        <i class="iconfont1" @click="block">&#xe61c;</i>
        <div class="none" v-if="sure">
          <el-input v-model="input2" placeholder="备用电话" class="input3" ></el-input>
        </div>
      </div>
        <div class="SC">
          <router-link :to="{name:'car_DZ'}">
            <span>送餐地址</span>
            <el-input v-model="this.$store.state.nameOne" placeholder="小区/写字楼/学校等" class="input2"></el-input>
          </router-link>

      </div>
      <el-input v-model="input4" placeholder="详细地址(如门牌号等)" class="input4"></el-input>
      <div class="foot">
        <span>标签</span>
        <el-input v-model="input5" placeholder="无/家/学校/公司" class="input5"></el-input>
      </div>
      <button class="btn btn-success">确定</button>
    </section>
</template>

<script>
    export default {
        name: "car_TJ",
      data(){
          return {
            input:'',
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            input5:'',
            radio:'1',
            sure:false,
            text:'',
            color: '#767676',
            colorRed:'red',
          }
      },
      methods:{
          get(){
            window.history.go(-1)
          },
        block(){
            this.sure=true
        },
        judge(){
          //判断输入框是否有值
          if(this.input==null){
            this.text = false
          }else {
            this.text = true
          }
          console.log(this.text)
        },
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
    font-size:0.26rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    float:right;
    color: blue;
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
  .input1{
      width: 75%;
    margin-left: 0.14rem;
    }
  .input2{
         width: 75%;
       }
  .input3{
    margin-left: 0.59rem;
    width: 75%;
  }
  .input4{
    margin-left: 0.6rem;
    width: 75%;
    margin-top: 0.2rem;
  }
  .input5{
    margin-left: 0.26rem;
    width: 75%;
  }
  .none{
    margin-top: 0.2rem;
  }
  .sex{
    width: 100%;
    height: 0.4rem;
    margin-top: 0.2rem;
    text-align: center;
    border-bottom: 0.005rem solid lightgray;
  }
  .phone{
    margin-top: 0.2rem;
  }
  .SC{
    margin-top: 0.2rem;
  }
  .foot{
    margin-top: 0.2rem;
  }
  .btn{
    margin-top: 0.2rem;
    margin-left: 5%;
    width: 90%;
  }
</style>
