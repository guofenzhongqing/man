<template>
  <section>
    <div class="box" v-if="true">
      <div ref="l_list" class="aside" v-if="goods.length !== 0">
        <ul>
          <li ref="l_item" :class="{changeStyle:index === actli}" @click="change(index)" v-for="(item,index) in getshopnum">
            <p>
              {{item.name}}
            </p>
          </li>
        </ul>
      </div>

      <div class="r_list" ref="r_list">
        <div>
          <div v-for="(it,index) in getshopnum" :key="index" ref="good" v-if="it.foods.length !== 0">
            <p class="title">
              <span>{{it.name}} </span>
              <span>{{it.description}}</span>
              <span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span>
            </p>
            <ul>
              <li  v-for="(item,index) in it.foods" :key="index" class="list " >
                <div class="list_item" @click.self="getDetails(item)">
                  <div v-if="item.attributes.length !== 0" class="list_item-div1">
                    <!--重点要分享, 写入ppt-->
                    <span v-for="i in item.attributes" :class="{newFood: i.icon_name == '新', shopSign: i.icon_name == '招牌'}">{{i.icon_name == '新' ? '新品':'招牌'}}</span>
                  </div>
                  <img :src="http + item.image_path">
                  <div class="list_item-div">
                    <p class="name">{{item.name}}</p>
                    <p class="des">{{item.description}}</p>
                    <p class="sale">
                      <span>月售{{item.month_sales}}</span>
                      <span>好评率{{item.satisfy_rate}}%</span>
                    </p>
                    <p class="image_text" v-if="item.activity !== null"><span>{{item.activity == null ? '' : item.activity.image_text}}</span></p>
                    <p class="price">
                      <span>￥{{item.specfoods.length > 0 ? item.specfoods[0].price : ''}} 起</span>
                      <span>
                        <span class="glyphicon glyphicon-minus-sign" aria-hidden="true" v-if="item.mynum" @click="removecar(item)"></span>
                        <span v-if="item.mynum">{{item.mynum}}</span>
                      <button class="btn" v-if="item.specfoods.length > 1" @click="showAlert(item)">选规格</button>
                      <span class="glyphicon glyphicon-plus-sign" aria-hidden="true" v-else @click="addGoods(item)"></span>
                      </span>
                    </p>
                  </div>
                </div>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--底部购物栏-->
    <div class="foot">
      <div class="footLeft">
        <div class="shopCar">
          <i class="iconfont" :class="{changeClo: mycar.length>0}">&#xe653;</i>
          <div v-if="mycar.length" class="rednum">{{mycarshopnum}}</div>
        </div>
        <div>
          <p>￥{{mycarshoppic}}</p>
          <p>配送费￥{{shopinfo.float_delivery_fee}}</p>
        </div>
      </div>
      <div class="footRight" :class="{changeBgc: shoppicbig==1}">
        <span v-if="shoppicbig==3">￥{{this.shopinfo.float_minimum_order_amount}}起送</span>
        <span v-if="shoppicbig==2">还差￥{{this.shopinfo.float_minimum_order_amount-mycarshoppic}}起送</span>
        <span v-if="shoppicbig==1">去结算</span>
      </div>
    </div>
    <!--弹框内容(规格多选)-->
    <mt-popup v-model="popupVisible">
      <div class="alertDiv">
        <p class="alertTitle">
          <span>{{alertMsg.name}}</span>
          <span class="iconfont pull-right" @click="closeAlert">&#xe621;</span>
        </p>
        <p>规格</p>
        <p>
          <mt-button plain size="small" type="primary" v-for="v in alertMsg.specfoods">{{v.specs_name}}</mt-button>
        </p>
        <p>
          <span>￥20</span>
          <mt-button type="primary" size="small" class="pull-right">加入购物车</mt-button>
        </p>
      </div>
    </mt-popup>
  </section>

</template>

<script>
import Better from 'better-scroll'
import Vue from 'vue'
    export default {
        name: "Commodity",
      data () {
        return {
          actli: 0,
          scrollY: 0,
          arr: [0],
          flag: true,
          obj: null,
          show: false,
          http: 'https://elm.cangdu.org/img/',
          rgt:'',
          left:'',
          goods:[],
          type:[],//选择规格
          alert:false,// 弹框是否显示
          mycar:[],// 存储购物车里的商品和数量
          goodNums:'',// 商品数量
          shopinfo:JSON.parse(localStorage.getItem('storeObj')),//店铺信息
          popupVisible:false,// 规格弹出框是否显示
          alertMsg:{}
        }
      },
      created(){
          // 获取商品信息
        if (localStorage.getItem('storeObj') !== null){
          Vue.axios.get('https://elm.cangdu.org/shopping/v2/menu?restaurant_id='+ JSON.parse(localStorage.getItem('storeObj')).id, null).then(res => {
            this.goods = res.data;
          })
        }
      },
      watch: {
        show () {
          if (this.show) {
            setTimeout(() => {
              new Better(this.$refs.detail, {
                click: true
              })
            })
          }
        }
      },
      methods: {
          // 选择规格的点击事件
        showAlert(d){
          this.popupVisible = true;
          this.alertMsg = d;

        },
        //点击关闭规格弹框
        closeAlert(){
          this.popupVisible = false;
        },
        change (index) {
          this.flag = false;
          this.actli = index;
          this.rgt.scrollToElement(this.$refs.good[index], 500, 0, 0);
          setTimeout(() => {
            this.flag = true
          }, 100)
        },
        //跳转到商品详细页面
        getDetails (it) {
          this.show = !this.show;
          this.obj = it;
        },
        //添加到购物车
        addGoods(e){
          if (localStorage.getItem("mycar") != null){
            let carArr = JSON.parse(localStorage.getItem("mycar"));
            let addOk = true;
            //判断是否添加数据
            for (let i = 0; i < carArr.length; i++){
              if (carArr[i].shop.item_id==e.item_id&&carArr[i].shop.category_id==e.category_id&&carArr[i].shop.restaurant_id==e.restaurant_id){
                carArr[i].num = carArr[i].num+1;
                addOk = false;
                break
              }
            }
            if (addOk){
              carArr.push({'shop': e, 'num': 1})
            }
            this.mycar = carArr;
            localStorage.setItem("mycar",JSON.stringify(carArr));
          } else{
            // 购物车本地缓存为空
          let carArr1 = [{'shop': e, 'num': 1}];
            this.mycar = carArr1;
            localStorage.setItem("mycar",JSON.stringify(carArr1));
          }
        },
        // 删除商品
        removecar:function(e){
          for(var i=0;i<this.mycar.length;i++){
            if(this.mycar[i].shop.specfoods[0]._id==e.specfoods[0]._id){
              this.mycar[i].num==1?this.mycar.splice(i,1):(this.mycar[i].num=this.mycar[i].num-1);
              break;
            }
          }
          localStorage.setItem("mycar",JSON.stringify(this.mycar));
        }
      },
      mounted () {
          // 获取购物车信息
        if(localStorage.getItem("mycar")){
          this.mycar=JSON.parse(localStorage.getItem("mycar"));
        }
        setTimeout(() => {
          this.left = new Better(this.$refs.l_list, {
            click: true
          });
          this.rgt = new Better(this.$refs.r_list, {
            click: true,
            probeType: 3
          });
         if (this.$refs.good !== undefined){
           this.$refs.good.forEach((el, index) => {
             this.arr.push(el.offsetHeight + this.arr[index]);
           });
         }
          this.rgt.on('scroll', (res) => {
            if (this.flag) {
              // console.log(res);
              this.scrollY = Math.abs(res.y);
              for (let i = 0; i < this.arr.length; i++) {
                if (this.scrollY > this.arr[i] && this.scrollY < this.arr[i + 1]) {
                  this.actli = i;
                  if (i === this.$refs.l_item.length - 2) {
                    this.left.scrollToElement(this.$refs.l_item[1], 100, 0, 0)
                  }
                  if (i === 2) {
                    this.left.scrollToElement(this.$refs.l_item[0], 100, 0, 0)
                  }
                }
              }
            }
          })
        },500);
      },
      computed:{
        //计算商品数量
        mycarshopnum(){
          var num=0;
          for(var i=0;i<this.mycar.length;i++){
            num+=this.mycar[i].num;
          }
          return num
        },
        //计算商品价格(商品只有一个种类)
        mycarshoppic(){
          var num=0;
          if(this.mycar.length){
            for(var i=0;i<this.mycar.length;i++){
              num+=(this.mycar[i].shop.specfoods[0].price*this.mycar[i].num);
            }
          };
          return num;
        },
        //判断商家起送价与目前购物车价格
        shoppicbig(){
          if(this.mycarshoppic>=this.shopinfo.float_minimum_order_amount){
            return 1
          }else if(this.mycarshoppic==0){
            return 3
          }else{
            return 2
          }
        },
        //商品与购物车数量结合
        getshopnum(){
          for(var i=0;i<this.goods.length;i++){
            let thisnum=0;
            for(var k=0;k<this.goods[i].foods.length;k++){
              let isadd=true;                          //判断该商品是否在购物车
              for( var h=0;h<this.mycar.length;h++){
                if(this.goods[i].foods[k].specfoods[0]._id==this.mycar[h].shop.specfoods[0]._id){
                  this.goods[i].foods[k].mynum=this.mycar[h].num;
                  thisnum+=this.mycar[h].num;
                  isadd=false;
                  break;
                }
              }
              if(isadd){
                this.goods[i].foods[k].mynum=0;
              }

            }
            this.goods[i].mynum=thisnum;
          }
          return this.goods
        },
        chooseMore(){
          // this.goods.map((j, v) => {
          //   console.log(j)
          // })
        }
      }
    }
</script>

<style scoped>
section{
  width: 100%;
  height: 100%;
  list-style: none;
}
p, ul{
  margin: 0;
  padding: 0;
}
.box{
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
.aside{
  width: 25%;
}
.aside ul{
  width: 100%;
  font-size: 0.16rem;
  text-align: center;
}
.aside li{
  width: 100%;
  list-style: none;
}
.aside li p{
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  border-bottom: 0.01rem solid lightgray;
  overflow: hidden;
}
.r_list{
  width: 75%;
}

.title{
  width: 90%;
  height: 0.35rem;
  margin: 0 auto;
  line-height:0.35rem;
}
.title>span:nth-child(1){
  font-size: 0.18rem;
  font-weight: bold;
  color: #000;
}
.title>span:nth-child(2){
  display: inline-block;
  width: 70%;
}
.title>span{
  font-size: 0.12rem;
  color: gray;
}
.list{
  width: 100%;
  list-style: none;
  background-color: white;
  border-bottom: 0.01rem solid lightgray;
}
.list_item{
  width: 100%;
  display: flex;
  padding: 0.1rem 0;
  overflow: hidden;
}
.list_item-div{
  width: 100%;
  margin-left: 0.08rem;
}
.list img{
  width: 0.7rem;
  height: 0.7rem;
}
.name{
  font-size: 0.14rem;
  font-weight: bold;
}
.des{
  font-size: 0.12rem;
  color: grey;
}
.sale{
  font-size: 0.12rem;
}
.image_text>span{
  font-size: 0.12rem;
  color: #f1884f;
  border: 0.01rem solid #f07373;
  border-radius: 0.4rem;
}
.price{
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-size: 0.12rem;
}
.price>span:nth-child(1){
  color: red;
}
.btn{
  padding: 0.01rem 0.02rem;
  text-align: center;
  background-color: #3190E8;
  color: white;
  font-size: 0.12rem;
}
.glyphicon-plus-sign{
  color: #3190E8;
  font-size: 0.18rem;
}
.glyphicon-minus-sign{
  color: #3190E8;
  font-size: 0.18rem;
}
.alert{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.1);
  position: absolute;
  left: 0;
  top: 0;
}
.changeStyle{
  background-color: white;
  font-weight: bold;
}
.last{
  border-bottom: none;
}
.list_item-div1{
  position: relative;
}
  .newFood{
    background-color: #5ec452;
    color: white;
    font-size: 0.12rem;
    position: absolute;
    left: -0.13rem;
    top: -0.13rem;
    display: inline-block;
    width: 0.5rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    transform: rotate(-45deg);
  }
  .shopSign{
    color: #f07373;
    border: 0.01rem #f07373 solid;
    border-radius: 0.03rem;
    font-size: 0.12rem;
    position: absolute;
    display: inline-block;
    text-align: center;
    width: 0.3rem;
    height: 0.16rem;
    left: 2.5rem;
  }
.foot{
  width: 100%;
  height: 0.5rem;
  color: white;
  display: flex;
  position: fixed;
  left: 0;
  top: 92.5%;
}
.footLeft{
  width: 65%;
  background-color: black;
  display: flex;
  font-size: 0.12rem;
}
.footLeft > div+div{
  position: absolute;
  left: 0.8rem;
}
.footRight{
  width: 35%;
  background-color: #61686A;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.16rem;
}
.shopCar{
  width: 0.5rem;
  height: 0.5rem;
  border: #61686A solid 0.04rem;
  border-radius: 50%;
  transform: translate(0.15rem, -0.15rem);
}
.rednum{
  position: absolute;
  top:0rem;
  right:-0.1rem;
  border-radius:50%;
  background-color:red;
  color:white;
  height:0.18rem;
  width:0.18rem;
  text-align:center;
  line-height:0.18rem;
  font-size:0.12rem;
}
.shopCar > .iconfont{
  text-align: center;
  line-height: 0.45rem;
}
.changeBgc{
  background-color: #5ec452;
}
.changeClo{
  color: #3190E8;
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:0.42rem;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;}
  .alertDiv{
    width: 2.5rem;
  }
  .alertTitle{
    text-align: center;
    margin: 0.1rem 0;
  }
  .alertTitle>span+span{
    font-size: 0.3rem;
    margin-right: 0.1rem;
  }
.alertDiv>p:nth-child(2){
  margin-left: 0.1rem;
}
.alertDiv>p:nth-child(3) button{
  margin: 0.1rem 0.1rem;
  line-height: 0.31rem;
  font-size: 0.12rem;
}
.alertDiv>p:nth-child(4){
  background-color: lightgray;
  padding: 0.1rem 0;
}
.alertDiv>p:nth-child(4) button{
  font-size: 0.12rem;
  width: 1rem;
  height: 0.25rem;
  line-height: 0.25rem;
  margin-right: 0.1rem;
}
.alertDiv>p:nth-child(4) span{
  color: red;
  font-size: 0.16rem;
}
</style>
