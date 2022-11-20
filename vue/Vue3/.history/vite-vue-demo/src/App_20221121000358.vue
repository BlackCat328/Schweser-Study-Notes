<template>

  <div>
    <A name="魏先生"></A>
  </div>

  <div>
    <img id="img" src="./a">
  </div>

</template>

<script setup lang='ts'>
import A from './components/A.vue'
import useBase64 from "./hooks";

useBase64({
  el:'#img'
})

</script>

<style scoped lang='less'>

</style>