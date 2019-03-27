<template>
    <section>
      <router-view></router-view>
      <Footer></Footer>
    </section>
</template>

<script>
    import Footer from "./Footer";
    export default {
        name: "All",
      components: {Footer}
    }
</script>

<style scoped>

</style>
