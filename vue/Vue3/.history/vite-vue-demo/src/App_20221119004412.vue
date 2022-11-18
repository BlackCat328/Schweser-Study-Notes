<template>

  <div>
    case1: <input type="text" v-model="message">
    <hr>
    case2: <input type="text" v-model="message2">
    <hr>
    case3: <input type="text" v-model="message3.foo.bar.num">
    <hr>
    case4: <input type="text" v-model="message4.foo.bar.name">
    <hr>
    case5:
    <br>
    <input type="text" v-model="message5.foo.bar.like">
    <br>
    <input type="text" v-model="message5.foo.bar.type">
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
let message4 = reactive({
  foo: {
    bar: {
      name: 'tom'
    }
  }
})
let message5 = reactive({
  foo: {
    bar: {
      like: 'jk',
      type: 'cloth'
    }
  }
})

// 侦听单个数据源，直接写就行了
// 侦听多个数据源是用数组的方式，当然 newVal, oldVal 也成为了数组
watch([message, message2], (newVal, oldVal) => {
  console.log(newVal, oldVal);
})

// ref 声明的对象，想要监听对象中更深层次的属性需要开启 deep 深度监听
watch(message3, (newVal, oldVal) => {
  // newVal, oldVal 一样
  console.log(newVal, oldVal);
}, {
  deep: true, // 开启深度监听
  immediate: true, // 回调默认调用一次
  flush: 'pre'
})

// reactive 声明的对象，不用开启 deep 深度监听也可以监听到对象中更深层次的属性
watch(message4, (newVal, oldVal) => {
  // newVal, oldVal 一样
  console.log(newVal, oldVal);
})

// 如若你只想侦听到对象中的某一个属性时，侦听的对象中的属性需要用函数形式返回
watch(() => message5.foo.bar.like, (newVal, oldVal) => {
  console.log(newVal, oldVal);
})

</script>

<style scoped>

</style>