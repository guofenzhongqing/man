<template>
  <section>
    <div class="head navbar-fixed-top">
      <span class="left" @click="bounc">ele.me</span>
      <span class="right" @click="login" v-if="person">登录 | 注册</span>
      <span class="right mine" @click="takeOut" style="font-size: 0.25rem" v-if="!person">&#xe663;</span>
    </div>
    <nav class="nav2">
      <span class="span">当前定位城市:</span>
      <span class="pull-right span1">定位不准时, 请在城市列表中选择</span>
    </nav>
    <router-link :to="{path: '/toCity', query:{name: city, id: id}}" class="nav3">
      <span>{{city}}</span>
      <span class="glyphicon glyphicon-chevron-right pull-right jt" style="color: #999999;"></span>
    </router-link>
    <ul class="row hotcity">
      <li class="col-xs-12 hot1">热门城市</li>
      <li class="col-xs-3 pl" v-for="city in array">
        <router-link :to="{path: '/toCity', query:{name: city.name, id: city.id}}">{{city.name}}</router-link>
      </li>
    </ul>
    <ul class="row ul2" v-for="pro in letter">
      <li class="col-xs-12 letter1">{{pro.letter}}</li>
      <li class="col-xs-3 city1" v-for="city in pro.city" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
        <router-link :to="{path: '/toCity', query:{name: city.name, id: city.id}}">{{city.name}}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "AllCity",
    data() {
      return {
        city: '',
        array: [],
        letter: [],
        id: '',
        person: true,
      }
    },
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=guess', null).then((res) => {
        this.city = res.data.name;
        this.id = res.data.id;
      }).catch((error) => {
        console.log(error);
      })
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=hot', null).then((res) => {
        this.array = res.data;
      }).catch((error) => {
        console.log(error);
      })
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group', null).then((res) => {
        let arr = Object.keys(res.data).sort();
        for (let i = 0; i < arr.length; i++) {
          const obj = {letter: arr[i], city: res.data[arr[i]]};
          this.letter.push(obj);
        }
      }).catch((error) => {
        console.log(error);
      })
      if (JSON.parse(localStorage.getItem('success')) === null) {
        this.person = true
      } else {
        this.person = false
      }
      console.log(JSON.parse(localStorage.getItem('success')))
    },
    methods: {
      getMsg() {
        console.log(this.letter);
      },
      login() {
        this.$router.push({path: '/login'})
      },
      bounc() {
        this.$router.push({path: '/allCity'})
      },
      takeOut() {
        this.$router.push({path: '/all/head'})
      }
    }
  }
</script>

<style scoped>
  section {
    width: 100%;
  }
  .head{
    width: 104%;
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: #008de1;
    color: white;
    overflow: hidden;
  }
  .left{
    margin-left: 0.1rem;
    font-size: 0.18rem;
  }
  .right{
    float: right;
    margin-right: 0.3rem;
    font-size: 0.16rem;
  }
  .nav2 {
    width: 104%;
    padding: 0.15rem 0.1rem 0.1rem;
    border-bottom: 0.01rem solid lightgrey;
    margin-top: 0.5rem;
  }
  .span{
    font-size: 0.15rem;
  }
  .span1 {
    color: #9F9F9F;
    font-size: 0.13rem;
    margin-top: 0.02rem;
  }
  .nav3 {
    display: block;
    width: 104%;
    padding: 0.1rem 0.15rem;
    border-bottom: 0.02rem solid lightgrey;
  }
  .nav3>span {
    font-size: 0.2rem;
  }
  .hotcity {
    border-top: 0.02rem solid lightgrey;
    margin-top: 0.1rem;
  }
  .hot1 {
    padding:0.1rem 0.3rem;
  }
  .hotcity>li {
    font-size: 0.2rem;
    font-size: 0.15rem;
  }
  .pl{
    text-align: center;
    border: 0.01rem solid lightgrey;
    padding: 0.05rem;
  }
  .pl>a {
    font-size: 0.15rem;
  }
  .city1 {
    border: 0.01rem solid lightgrey;
    text-align: center;
    padding: 0.1rem;
  }
  .city1>a {
    color: black;
    font-size: 0.15rem;
  }
  .letter1 {
    border-top: 0.02rem solid lightgrey;
    padding: 0.1rem 0.3rem;
  }
  .ul2 li{
    font-size: 0.2rem;
  }

</style>
