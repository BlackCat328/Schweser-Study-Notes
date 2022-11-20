<template>

  <div>
    <h1>第一种方式，父组件做中转站</h1>
    <A @on-click="getFlag"></A>
    <B :flag="Flag"></B>
  </div>

  <div>
    <h1>第二种方式，eventBus</h1>
    <A></A>
    <B></B>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';
import B from './components/B.vue';
import B from './components/B.vue';

let Flag = ref(false)
const getFlag = (params: boolean) => {
  Flag.value = params
}

</script>

<style scoped lang='less'>

</style>