<template>

  <div>
    case1: <input type="text" v-model="message">
    <hr>
    case2: <input type="text" v-model="message2">
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive, watch } from 'vue';

let message = ref<string>('魏先生')
let message2 = ref<string>('魏先森')

// 侦听多个数据源，na
watch([message, message2], (newVal, oldVal) => {
  console.log(newVal, oldVal);
})

</script>

<style scoped>

</style>