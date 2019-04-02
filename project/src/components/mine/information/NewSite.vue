<template>
    <section>
       <div class="head">
         <i class="jiantouL" @click="getBack">&#xe6bc;</i>
         <span class="new">新增地址</span>
       </div>
      <div class="newSite">
        <input type="text" placeholder="请填写你的姓名" v-model="username"><br>
        <input type="text" placeholder="小区/写字楼/学校等" @click="search" v-model="location"><br>
        <input type="text" placeholder="请填写详细送餐地址" v-model="minute" @input="judge" :class="{bgc: buer}"><br>
        <p style="color: red;margin: 0.02rem 0 0 -1.8rem;font-size: 0.15rem" v-if="buer">{{text}}</p>
        <input type="text" placeholder="请填写能够联系到您的手机号" v-model="iphone" @input="phone" :class="{bgc: buer1}"><br>
        <p style="color: red;margin: 0.02rem 0 0 -2.2rem;font-size: 0.15rem" v-if="buer1">{{content}}</p>
        <input type="text" placeholder="备用联系电话 (选填)" v-model="backup" @input="backBurner" :class="{bgc: buer2}">
        <p style="color: red;margin: 0.02rem 0 0 -2.2rem;font-size: 0.15rem"  v-if="buer2">请输入正确的手机号</p>
      </div>
      <div class="foot">
        <button :class="{abcColor: username != '' && !(minute.length < 3) ? true : false}" class="color" @click="newAddress">新增地址</button>
      </div>
      <mt-popup v-model="tankuang" :modal="false" :closeOnClickModal="false" class="wrong animated bounceIn">
        <i class="gth warn">&#xe60d;</i>
        <p class="ziti">{{details}}</p>
        <button class="dianji" @click="affirm">确认</button>
      </mt-popup>
    </section>
</template>

<script>
    export default {
        name: "NewSite",
        data() {
          return {
            username: '',
            location: '',
            minute: '',
            iphone: '',
            backup: '',
            text: '',
            content: '',
            buer: false,
            buer1: false,
            buer2: false,
            tankuang: false,
            details: ''
          }
        },
        methods: {
          getBack() {
            this.$router.go(-1);
          },
          search() {
            this.$router.push({name: 'grabble'})
          },
          judge() {
            if (this.minute.length == 0 ) {
              this.buer = true;
              this.text = '请详细填写送餐地址'
            }else if (this.minute.length < 3) {
              this.buer = true;
              this.text = '送餐地址太短了, 不能辨识'
            }else {
              this.buer = false;
            }

          },
          phone() {
           if (this.iphone == '') {
             this.buer1 = true;
             this.content = '手机号不能为空'
           }else if(!(/^1[34578]\d{9}$/.test(this.iphone))) {
             this.buer1 = true;
             this.content = '请输入正确的手机号'
           }else if (/^1[34578]\d{9}$/.test(this.iphone)) {
             this.buer1 = false;
           }
          },
          backBurner() {
            if(this.backup == '') {
              this.buer2 = false
            }else if(!(/^1[34578]\d{9}$/.test(this.backup))) {
              this.buer2 = true
            }else if (/^1[34578]\d{9}$/.test(this.backup)) {
              this.buer2 = false;
            }
          },
          newAddress() {
            if (this.username.length == 0) {
              this.details =  '收货人姓名错误'
              this.tankuang = true
            }
            if (this.minute.length < 3 || this.minute.length == 0) {
              this.details =  '详细地址信息错误'
              this.tankuang = true
            }
            if (this.iphone.length == 0) {
              this.details =  '手机号不能为空'
              this.tankuang = true
            }
            if (this.location.length == 0) {
              this.details =  '地址信息错误'
              this.tankuang = true
            }
            const url = `https://elm.cangdu.org/v1/users/${JSON.parse(localStorage.getItem("enter")).id}/addresses`;
            this.$http({
              method: 'post',
              url: url,
              withCredentials: true, // 默认false
              data:{
                address: this.location,
                address_detail: this.minute,
                geohash: JSON.parse(localStorage.getItem("city")).geohash,
                name: this.username,
                phone: this.iphone,
                tag: '学校',
                sex: 1,
                poi_type:0,
                phone_bk:this.backup,
                tag_type:3
              }
            }).then((res) => {
              console.log(res);
            })
          },
          affirm() {
            this.tankuang = false;
          }
        },
      mounted() {
          this.location = JSON.parse(localStorage.getItem("location")).name ;
      }
    }
</script>

<style scoped>
  section {
    width: 100%;
    height: 100%;
    background-color: gainsboro;
    padding-top: 0.7rem;
  }
  .head {
    width: 100%;
    height: 0.6rem;
    background-color: #008de1;
    position: fixed;
    top: 0;
    z-index: 2;
    line-height: 0.6rem;
  }
  .jiantouL {
    font-size: 0.2rem;
    color: white;
    margin-left: 0.05rem;
  }
  .new {
    font-size: 0.2rem;
    font-weight: 600;
    color: white;
    margin-left: 1.1rem;
  }
  .newSite {
    background-color: white;
    width: 100%;
    text-align: center;
    padding: 0.1rem 0;
  }
  input {
    width: 94%;
    height: 0.35rem;
    background-color: gainsboro;
    padding-left: 0.1rem;
    margin-top: 0.1rem;
    border-top: 0.02rem solid gray;
    border-bottom: 0.01rem solid gray;
    border-right: 0.01rem solid gray;
    border-left: 0.01rem solid gray;
  }
  .foot {
    width: 94%;
    margin: 0.1rem auto;
  }
  .color {
    width: 100%;
    height: 0.4rem;
    background-color: forestgreen;
    color: gray;
    transition: color 1s;
  }
  .bgc {
    border: 0.01rem solid red;
  }
  .abcColor {
    color: white;
    transition: color 1s;
  }
  .wrong {
    width: 80%;
    height: 1.7rem;
    text-align: center;
    position: absolute;
    top: 40%;
    left: 0.35rem;
  }
  .warn {
    font-size: 0.5rem;
    color: orange;
  }
  .ziti {
    color: black;
    font-size: 0.25rem;
    font-weight: 900;
  }
  .dianji {
    width: 100%;
    height: 0.45rem;
    background-color: green;
    color: white;
    font-size: 0.25rem;
    margin-top: 0.1rem;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
  }
</style>
