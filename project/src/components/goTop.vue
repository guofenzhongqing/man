<template>
  <div id="goTop">
    <div class="goTop" v-show="goTopShow" @click="goTop">
      <i class="touxiang" >&#xe662;</i>
    </div>
  </div>
</template>
<script>
  export default {
    name: "goTop",
    data(){
      return{
        scrollTop: '',
        goTopShow:false,
      }
    },
    methods:{
      handleScroll () {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(this.scrollTop > 200){
          this.goTopShow = true
        }else {
          this.goTopShow = false
        }
      },
      goTop(){
        let timer = null, _that = this;
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn(){
          if(_that.scrollTop > 0){
            _that.scrollTop -= 250;
            document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
            timer=requestAnimationFrame(fn)
          }else {
            cancelAnimationFrame(timer);
            _that.goTopShow = false;
          }
        })
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed(){
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>
  .touxiang{
    display: block;
    font-size:0.5rem;
    font-style:normal;
    background-color: transparent;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    color: lightpink;
  }
  .goTop{
    position: fixed;
    text-align: center;
    right: 0.1rem;
    bottom: 0.6rem;
    width: 0.5rem;
    height: 0.5rem;
  }

</style>

