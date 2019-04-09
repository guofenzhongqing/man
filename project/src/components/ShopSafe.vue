<template>
    <section>
      <!--头部-->
      <nav class="nav">
        <span class="glyphicon glyphicon-menu-left pull-left" aria-hidden="true" @click="back"></span>
        <span>食品监督安全公示</span>
      </nav>
      <div class="foodSafe">
        <div class="food">食品监督安全公示</div>
        <div class="check">
          <i class="pin">&#xe669;</i>
          <div>
            <p>监督检查结果: <span class="i">良好</span></p>
            <p>检查日期:</p>
          </div>
        </div>
      </div>
      <div class="details">
        <p>工商登记信息</p>
        <p>企业名称{{storeMsg.identification.company_name}}</p>
        <p>工商执照注册号{{storeMsg.identification.registered_number}}</p>
        <p>注册资本{{storeMsg.identification.licenses_date}}</p>
        <p>注册地址{{storeMsg.identification.registered_address}}</p>
        <p>属地监管所{{storeMsg.identification.identificate_agency}}</p>
        <p>法定代表人{{storeMsg.identification.legal_person}}</p>
        <p>经营范围{{storeMsg.identification.licenses_scope}}</p>
      </div>
      <div class="details">
        <p>餐饮许可证</p>
        <p>经营范围{{storeMsg.identification.licenses_scope}}</p>
        <p>许可证有效期{{storeMsg.identification.registered_number}}</p>
        <p>许可证号{{storeMsg.identification.licenses_number}}</p>
        <p>发证时间{{storeMsg.identification.licenses_date}}</p>
        <p>发证机关{{storeMsg.identification.operation_period}}</p>
      </div>
      <div class="details">
        <p>许可证书</p>
        <div>
          <div><img src="../assets/img/54.jpg" class="img"></div>
          <div><img src="../assets/img/55.jpg" alt="" class="img"></div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "ShopSafe",
      data(){
        return{
          storeMsg:{}, //商铺信息
        }
      },
      methods:{
          back(){
            history.go(-1)
          },
      },
      created(){
        if (localStorage.getItem("storeObj") !== null){
          this.storeMsg = JSON.parse(localStorage.getItem("storeObj"));
          console.log(this.storeMsg)
        }
      },
    }
</script>

<style scoped>
  section{
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0;
    padding: 0;
  }
  .nav{
    background-color: #3190E8;
    width: 100%;
    height: 0.4rem;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    line-height: 0.4rem;
  }
  .nav .pull-left{
    color: white;
    font-size: 0.2rem;
    line-height: 0.4rem;
    margin-left: 0.05rem;
  }
  .nav span+span{
    color: white;
    font-size: 0.17rem;
  }
  .check{
    display: flex;
    width: 100%;
    height: 0.8rem;
    background-color: white;
    border-top: 0.065rem solid lightgray;
    padding: 0.1rem 0;
  }
  .check>i, .i{
    color: green;
  }
  .check>div{
    margin-left: 0.05rem;
  }
  .pin{
    font-family:"iconfont" !important;
    font-size:0.5rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .foodSafe{
    width: 100%;
    padding-top: 0.5rem;
  }
.food{
  width: 100%;
  height: 0.35rem;
  font-size: 0.16rem;
  line-height: 0.35rem;
  background-color: white;
  margin-left: 0.02rem;
}
  .details{
    width: 100%;
    background-color: white;
  }
  .details > p:nth-child(1){
    width: 100%;
    height: 0.35rem;
    line-height: 0.35rem;
    font-size: 0.2rem;
    border-top: 0.03rem solid gray;
    border-bottom: 0.01rem solid gray;
  }
  .details > p{
    font-size: 0.13rem;
    padding-left: 0.05rem;
  }
  .details>div{
    width: 90%;
    height: 1.5rem;
    background-color: lightgray;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .details>div>div{
    width: 45%;
    height: 90%;
    border: 0.01rem solid gray;
  }
  .img{
    width: 100%;
    height: 100%;
  }
</style>
