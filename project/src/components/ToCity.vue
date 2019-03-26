<template>
    <section>
      <div class="head navbar-fixed-top">
        <span class="glyphicon glyphicon-chevron-left arrows" @click="toAllCity"></span>
        <span class="city">{{getName}}</span>
        <span class="cut" @click="toCutCity">切换城市</span>
      </div>
      <div class="below">
        <input type="text" placeholder="输入学校、商务楼、地址" class="seek" v-model="round"><br>
        <button class="btn btn-primary present" @click="site">提交</button>
      </div>
      <div class="history"  v-if="hiddd">
        <p style="margin: 0.05rem 0.1rem">搜索历史</p>
        <div v-for="pro in message" class="message" @click="toCity">
          <p class="p1">{{pro.name}}</p>
          <p class="p2">{{pro.address}}</p>
        </div>
        <p class="delete" @click="remove">清空所有</p>
      </div>
      <div v-for="message in array" class="message" @click="deposit(message)">
        <p class="p1">{{message.name}}</p>
        <p class="p2">{{message.address}}</p>
      </div>
    </section>
</template>

<script>
import Vue from 'vue'
    export default {
        name: "ToCity",
        data() {
          return {
            round: '',
            hiddd: true,
            array: [],
            message: []
          }
        },
        computed: {
          getName() {
            return this.$route.query.name
          }
        },
      methods: {
        toAllCity() {
          this.$router.go(-1);
        },
        toCutCity() {
          this.$router.push({path: '/allCity'})
        },
        site() {
          this.hiddd = !this.hiddd;
          let url = 'https://elm.cangdu.org/v1/pois?city_id=' + this.$route.query.id + '&keyword=' + this.round + '&type=search'
          Vue.axios.get(url, null).then((res) => {
            this.array = res.data;
          }).catch((error) => {
            console.log(error);
          })
        },
        deposit(m) {
          this.$store.commit('history', m);
          this.$router.push({path: '/takeout'})
        },
        remove() {
          localStorage.clear();
          this.message.splice(0, this.message.length);
        },
        toCity() {
          this.$router.push({path: '/takeout'})
        }
      },
      mounted() {
       this.message = JSON.parse(localStorage.getItem("arr"));
      }
    }
</script>

<style scoped>
  section {
    width: 100%;
  }
  .head{
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: #008de1;
    color: white;
    display: flex;
    justify-content: space-between;
  }
  .arrows {
    font-size: 0.15rem;
    margin:0.2rem 0 0 0.1rem;
  }
  .city {
    font-size: 0.2rem;
  }
  .cut {
    font-size: 0.15rem;
    margin-right: 0.1rem;
  }
  .below {
    width: 96%;
    margin-top: 0.7rem;
    padding:0.1rem;
    border-top: 0.01rem solid lightgrey;
  }
  .seek {
    width: 100%;
    height: 0.4rem;
    border: 0.01rem solid lightgrey;
    padding-left: 0.1rem;
  }
  .present {
    width: 100%;
    margin-top: 0.1rem;
  }
  .history {
    border-top: 0.02rem solid lightgrey;
    border-bottom: 0.02rem solid lightgrey;
  }
  .message {
    width: 100%;
    height: 1rem;
    border-top: 0.02rem solid lightgrey;
    padding-left: 0.1rem;
  }
  .p1 {
    font-size: 0.2rem;
    font-weight: 900;
    margin-top: 0.2rem;
  }
  .p2 {
    font-size: 0.15rem;
    color: grey;
  }
  .delete {
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.25rem;
    border-top: 0.01rem solid lightgrey;
  }
</style>
