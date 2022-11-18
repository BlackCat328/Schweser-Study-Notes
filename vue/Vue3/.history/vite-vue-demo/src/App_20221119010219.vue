<template>

  <div>
    <input id="ipt" type="text" v-model="message">
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
// 回调中接收的参数 oninvalidate 可清除副作用，总在监听到数据变化前调用
// watchEffect 会返回一个停止监听的函数
const stop = watchEffect((oninvalidate) => {
  l
  console.log('message -->', message.value);
  console.log('message2 -->', message2.value);

  oninvalidate(() => {
    console.log('before');
  })
})

const stopWatch = () => stop()

</script>

<style scoped>

</style>