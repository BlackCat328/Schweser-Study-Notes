<template>

  <div>
    <input type="text" v-model="message">
    <input type="text" v-model="message2">

    <button @click="stopWatch">停止监听</button>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive, watchEffect } from 'vue';

let message = ref<string>('飞机')
let message2 = ref<string>('坦克')

// 要监听什么值，直接塞进 watchEffect 的回调函数中即可
// 进页面直接调用
// 
const stop = watchEffect((oninvalidate) => {
  console.log('message -->', message.value);
  console.log('message2 -->', message2.value);
  // 清除副作用
  oninvalidate(() => {
    console.log('before');
  })
})

const stopWatch = () => stop()

</script>

<style scoped>

</style>