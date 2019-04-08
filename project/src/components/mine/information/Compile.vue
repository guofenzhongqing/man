<template>
    <section>
      <div class="head">
        <i class="jiantouL" @click="getBack">&#xe6bc;</i>
        <span style="font-weight: 600;font-size: 0.2rem;color: white">编辑地址</span>
        <span style="margin-right: 0.1rem;color: white;font-size: 0.18rem" @click="bianji">{{redact ? '编辑' : '完成'}}</span>
      </div>
      <ul>
        <li v-for="(pro, index) in array" class="lb" v-if="hide">
          <span>{{pro.address}}</span><br>
          <span>{{pro.phone}}</span>
          <i class="cuohao" @click="delet(index, pro.id)" v-if="!redact">&#xe632;</i>
        </li>
      </ul>
      <div class="site" @click="newSite">
        <span style="font-size: 0.18rem;margin-left: 0.1rem;font-weight: 600">新增地址</span>
        <span class="jiantouR">&#xe74c;</span>
      </div>
    </section>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Compile",
      data() {
          return {
            array: [],
            redact: true,
            hide: false
          }
      },
        methods: {
          getBack() {
            this.$router.go(-1);
          },
          newSite() {
            this.$router.push({name: 'newSite'})
          },
          delet(p, id) {
            console.log(JSON.parse(localStorage.getItem("success")))
            let userid = JSON.parse(localStorage.getItem("success")).id;
            let url = 'https://elm.cangdu.org/v1/users/'+ userid + '/addresses/'+id
            Vue.axios.delete(url, null).then((res) => {
              console.log(res)
              if (res.data.success = '删除地址成功') {
                this.array.splice(p, 1);
              }
            }).catch((error) => {
              console.log(error)
            })
          },
          bianji() {
            this.redact = !this.redact;
          }
        },
      mounted() {
          this.hide = true;
          let userid = JSON.parse(localStorage.getItem("success")).id;
          let url = 'https://elm.cangdu.org/v1/users/' + userid + '/addresses'
          Vue.axios.get(url, null).then((res) => {
            console.log(res.data);
            this.array = res.data.reverse();
          }).catch((error) => {
            console.log(error);
          })
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
    width: 100%;
    height: 0.6rem;
    background-color: #008de1;
    position: fixed;
    top: 0;
    z-index: 2;
    line-height: 0.6rem;
    display: flex;
    justify-content: space-between;
  }
  .jiantouL {
    font-size: 0.2rem;
    color: white;
  }
.border {
  width: 100%;
  height: 0.1rem;
  border-top: 0.01rem solid lightgrey;
  border-bottom: 0.01rem solid lightgrey;
}
.jiantouR {
  margin-right: 0.1rem;
  font-size: 0.2rem;
  color: gray;
}
  .site {
    width: 100%;
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    background-color: white;
    line-height: 0.4rem;
  }
  .lb {
    padding: 0.1rem;
    border-top: 0.01rem solid darkgray;
    position: relative;
  }
  .lb>span {
    font-size: 0.18rem;
    font-weight: 600;
  }
  li:nth-child(1) {
    background-color: lightyellow;
  }
  li:nth-last-child(1) {
    border-bottom: 0.01rem solid darkgray;
  }
  li {
    background-color: white;
  }
  .cuohao {
    position: absolute;
    top: 0.2rem;
    font-size: 0.18rem;
    right: 0.1rem;
  }
</style>
