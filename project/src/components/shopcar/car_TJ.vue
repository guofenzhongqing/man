<template>
    <section>
      <div class="head">
        <i class="iconfont" @click="get">&#xe64b;</i>
        <span>添加地址</span>
      </div>
      <span>联系人</span>
      <el-input v-model="name" placeholder="你的名字" class="input1" :class='{color:text}'></el-input>
      <div class="sex">
        <el-radio v-model="radio" label="1">先生</el-radio>
        <el-radio v-model="radio" label="2">女士</el-radio>
      </div>
      <div class="phone">
        <span>联系电话</span>
        <el-input v-model="phoneNum" placeholder="你的手机号" class="input2"></el-input>
        <i class="iconfont1" @click="block">&#xe61c;</i>
        <div class="none" v-if="sure">
          <el-input v-model="phoneNum1" placeholder="备用电话" class="input3" ></el-input>
        </div>
      </div>
        <div class="SC">
          <router-link :to="{name:'car_DZ'}">
            <span>送餐地址</span>
            <el-input v-model="foodAddress" placeholder="小区/写字楼/学校等" class="input2"></el-input>
          </router-link>

      </div>
      <el-input v-model="address" placeholder="详细地址(如门牌号等)" class="input4"></el-input>
      <div class="foot">
        <span>标签</span>
        <el-input v-model="tag" placeholder="无/家/学校/公司" class="input5"></el-input>
      </div>
      <button class="btn btn-success" @click="addAddress">确定</button>
      <mt-popup v-model="popupVisible" class="alert">
        <div>
          <p>{{alertMsg}}</p>
        </div>
      </mt-popup>
    </section>
</template>

<script>
    export default {
        name: "car_TJ",
      data(){
          return {
            name:'',// 用户名
            phoneNum:'',//手机号
            phoneNum1:'',// 备用手机号
            foodAddress: this.$store.state.nameOne,// 地址
            address:'',// 详细地址
            tag:'',// 标签
            radio:'1',// 性别
            sure:false,
            text:'',
            color: '#767676',
            colorRed:'red',
            alertMsg:'',
            popupVisible:false,
            userId:''// 用户ID
          }
      },
      methods:{
          get(){
            window.history.go(-1)
          },
        block(){
            this.sure=true
        },
        addAddress(){
          this.userId = JSON.parse(localStorage.getItem('personObj')).id;
            if (this.name == '' || this.phoneNum == '' ||this.phoneNum1 == '' || this.foodAddress == '' || this. address == '' || this.tag == ''){
              this.alertMsg = '请输入完整信息';
              this.popupVisible = true;
            } else {
              // 发起请求 新增地址
              const url = `https://elm.cangdu.org/v1/users/${this.userId}/addresses`;
              this.$http({
                method: 'post',
                url: url,
                withCredentials: true, // 默认false
                data:{
                  user_id:this.userId,
                  address: this.foodAddress,
                  address_detail: this.address,
                  geohash: this.$store.state.city.geohash,
                  name: this.name,
                  phone: this.phoneNum,
                  phone_bk: this.phoneNum1,
                  tag: this.tag,
                  sex: this.radio,
                  tag_type:2
                }
              }).then(res => {
                if (res.data.success){
                  history.go(-1)
                }
              })
            }
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
  .alert{
    width: 60%;
    height: 30%;
  }
  .alert > div{
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .alert > div > p{
    width: 100%;
    font-size: 0.25rem;
  }
</style>
