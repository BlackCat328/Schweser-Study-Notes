<template>

  <div>
    <A @on-click="getFlag"></A>
    <B></B>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';

let Flag = ref(false)
const getFlag = () => {
  Flag.value = pa
}

</script>

<style scoped lang='less'>

</style>