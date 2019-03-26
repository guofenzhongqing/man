<template>
    <section>
      <mt-swipe :auto="4000" style="width: 100%;height: 5rem;">
        <mt-swipe-item>
          <div v-for="pro in array" class="carousel">
            <img :src="'https://fuss10.elemecdn.com'+pro.image_url" alt="" class="img1">
            <p class="letter">{{pro.title}}</p>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div v-for="pro in arr" class="carousel">
            <img :src="'https://fuss10.elemecdn.com'+pro.image_url" alt="" class="img1">
            <p class="letter">{{pro.title}}</p>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </section>
</template>

<script>
import Vue from 'vue'
    export default {
        name: "TakeOut",
        data() {
          return {
            array: [],
            arr:[]
          }
        },
        mounted() {
          Vue.axios.get('https://elm.cangdu.org/v2/index_entry').then((res) => {
            this.array = res.data.slice(0,8);
            this.arr = res.data.slice(8, 16);
          }).catch((error) => {
            console.log(error)
          })
        }
    }
</script>

<style scoped>
  section {
    width: 100%;
  }
.img1 {
  width: 0.6rem;
}
  .carousel {
    width: 20%;
    height: 0.7rem;
    float: left;
    margin: 0.09rem;
    text-align: center;
  }
.letter {
  text-align: center;
  font-size: 0.15rem;
}
</style>
