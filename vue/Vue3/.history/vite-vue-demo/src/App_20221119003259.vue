<template>

  <div>
    case1: <input type="text" v-model="message">
    <hr>
    case2: <input type="text" v-model="message2">
    <hr>
    case2: <input type="text" v-model="message3.foo.bar.num">
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive, watch } from 'vue';

let message = ref<string>('魏先生')
let message2 = ref<string>('魏先森')
let message3 = ref({
  foo: {
    bar: {
      num: 1
    }
  }
})

// 侦听单个数据源，直接写就行了
// 侦听多个数据源是用数组的方式，当然 newVal, oldVal 也成为了数组
watch([message, message2], (newVal, oldVal) => {
  console.log(newVal, oldVal);
})

watch(message3, (newVal, oldVal) => {
  console.log(newVal, oldVal);
},{
  deep
})

</script>

<style scoped>

</style>