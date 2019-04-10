<template>
    <section>
      <div class="head">
        <i class="pin" @click="get">&#xe6bc;</i>
        <span>订单备注</span>
      </div>

      <div class="content" style="margin-left: 0.2rem">
        <p style="font-size: 0.18rem">快速备注</p>
        <el-radio-group v-model="radio3"  size="small">
          <el-radio-button label="不要辣"></el-radio-button>
          <el-radio-button label="少点辣"></el-radio-button>
          <el-radio-button label="多点辣"></el-radio-button>
        </el-radio-group>
        <el-radio-group v-model="radio4" class="NO"  size="small">
          <el-radio-button label="不要香菜"></el-radio-button>
        </el-radio-group>
        <div class="Z">
          <el-radio-group v-model="radio5" class="NO1"  size="small">
            <el-radio-button label="不要洋葱"></el-radio-button>
          </el-radio-group>
          <el-radio-group v-model="radio6" class="NO"  size="small">
            <el-radio-button label="多点醋"></el-radio-button>
          </el-radio-group>
          <el-radio-group v-model="radio7" class="NO"  size="small">
            <el-radio-button label="多点葱"></el-radio-button>
          </el-radio-group>
        </div>
         <div class="s">
           <el-radio-group v-model="radio5" class="NO1"  size="small">
             <el-radio-button label="去冰"></el-radio-button>
             <el-radio-button label="少冰"></el-radio-button>
           </el-radio-group>
         </div>
      </div>

      <div class="foot" style="margin-left: 0.2rem">
        <p style="font-size: 0.18rem">其他备注</p>
        <textarea v-model="tX" placeholder="请输入备注内容(可不填)"></textarea>
      </div>
      <button class="btn btn-success" @click="getXX">确定</button>
    </section>
</template>

<script>
    export default {
        name: "car_Order",
      data(){
          return {
            radio3:'',
            radio4:'',
            radio5:'',
            radio6:'',
            radio7:'',
            tX:'',
            Arr:[]
          }
      },
      methods:{
        get(){
          window.history.go(-1)
        },
        getXX(){
          // this.$store.str=this.radio3+this.radio4+this.radio5+this.radio6+this.radio7+this.tX;
          this.Arr=[this.radio3, this.radio4, this.radio5, this.radio6, this.radio7, this.tX].filter((item)=>{
            return item
          });
          this.$store.state.RemarksArr=this.Arr
          window.history.go(-1)
        }
      }
    }
</script>

<style scoped>
  .pin{
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
    text-align: center;
    color: white;
  }
  .content{
    width: 100%;
    height: 2rem;
    background-color: white;
    margin-top: 0.1rem;
  }
  p{
   padding-top: 0.2rem;
  }
 .NO{
   margin-left: 0.2rem;
 }
  .foot{
    width: 100%;
    height: 1.8rem;
    background-color: white;
    margin-top: 0.1rem;
  }
  textarea{
    width: 80%;
    height: 1.1rem;
    border-radius: 0.04rem;
    background-color: whitesmoke;
    padding: 0.1rem 0 0 0.1rem;
    font-size: 0.18rem;
  }
  button{
    width: 90%;
    margin-left: 5%;
  }
</style>
