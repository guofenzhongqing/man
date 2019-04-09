<template>
    <section>
      <div class="head">
        <i class="iconfont" @click="get">&#xe6bc;</i>
        <span>添加地址</span>
      </div>
      <div>
        <p>联系人</p>
        <input type="text" placeholder="你的名字" style="margin-left: 0.15rem;border-bottom: 0.01rem solid lightgrey;" v-model="name">
        <p style="margin-left: 1rem"  @click="sexM">
          <i class="jiantouR" :class="{color: col}">&#xe65c;</i><span>先生</span>
        </p>
        <p  @click="sexW">
          <i class="pin" :class="{color: !col}">&#xe65c;</i><span>女士</span>
        </p>
      </div>
      <div>
        <p>联系电话</p>
        <input type="text" placeholder="你的手机号" :class="{kuang: hide}" v-model="phoneNum">
        <i class="jiantouR" style="font-size: 0.25rem;color: #008de1;" @click="hide=true">&#xe60e;</i>
        <input type="text" placeholder="备选电话" style="margin-left: 1.05rem" v-if="hide" v-model="phoneNum1">
      </div>
      <div>
        <p>送餐地址</p>
        <input type="text" placeholder="小区/写字楼/学校等" style=" border-bottom: 0.01rem solid lightgrey;" @click="tiao" v-model="foodAddress">
        <input type="text" placeholder="详细地址(如门牌号等)" style="margin-left: 1.05rem" v-model="address">
      </div>
      <div>
        <p>标签</p>
        <input type="text" placeholder="无/家/学校/公司等" style="margin-left: 0.35rem" v-model="tag">
      </div>
        <button class="tijiao" @click="addAddress">提交</button>
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
            radio:0,// 性别
            sure:false,
            text:'',
            color: '#767676',
            colorRed:'red',
            alertMsg:'',
            popupVisible:false,
            userId:'',// 用户ID
            hide: false,
            col: true
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
          this.userId = JSON.parse(localStorage.getItem('success')).id;
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
                  geohash: JSON.parse(localStorage.getItem('city')).geohash,
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
            console.log(this.radio)
        },
        sexM(){
              this.radio = 1
             this.col = !this.col;
        },
        sexW() {
            this.radio = 2;
            this.col = !this.col;
        },
        tiao() {
            this.$router.push({name: 'car_dz'})
        }
      }
    }
</script>

<style scoped>
  section{
    width: 100%;
  }
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
div>p {
  display: inline-block;
  font-size: 0.18rem;
  margin: 0.15rem 0.15rem 0.15rem 0;
}
  div>input {
    width: 64%;
    height: 0.45rem;
  }
  section>div+div {
    border-bottom: 0.01rem solid lightgrey;
    width: 94%;
    margin: 0 auto;
  }
  .tijiao {
    display: block;
    width: 94%;
    height: 0.4rem;
    margin: 0.15rem auto;
    background-color: #4CD964;
    border-radius: 0.07rem;
  }
  .color {
      color: #4CD964;
  }
  .kuang {
    border-bottom: 0.01rem solid lightgrey;
  }
</style>
