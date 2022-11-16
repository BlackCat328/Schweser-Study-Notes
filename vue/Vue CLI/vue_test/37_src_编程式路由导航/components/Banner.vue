<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="test">测试go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back(){
      this.$router.back() //后退1步
    },
    forward(){
      this.$router.forward() //前进1步
    },
    test(){
      this.$router.go(-2) //整数则是前进n步，负数则是后退n步
    }
  }
}
</script>

<style scoped>

</style>