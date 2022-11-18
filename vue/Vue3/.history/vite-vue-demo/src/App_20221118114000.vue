<template>

  <div>
    <h3>对象，Man</h3>
    <form>
      <input type="text" v-model="Man.name">
      <br>
      <input type="text" v-model="Man.age">
      <br>
      <input type="text" v-model="Man1.name">
      <br>
      <input type="text" v-model="Man1.age">
      <br>
      <button @click.prevent="submit">提交</button>
    </form>
    <h3>数组</h3>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <button @click="onPush">add</button>
  </div>

</template>

<script setup lang='ts'>
import { reactive } from 'vue';
/* 
  ref reactive
  1. ref 支持所有类型
  2. reactive 支持引用类型，如 Array Object Map Set...
  3. ref 取值赋值都要加 .value, reactive 取值赋值不需要 .value
*/

// 定义 reactive，直接定义有类型推导
let Man = reactive({ name: '魏先生', age: 23 })

// 手动定义 接收泛型
type M = {
  name: string;
  age: number;
}
let Man1 = reactive<M>({ name: '刘先生', age: 22 })

const submit = () => {
  console.log(Man);
  console.log(Man1);
}

// 定义数组
// let list = reactive<string[]>(['TOP', 'V5'])
let list = reactive<{ arr: string[] }>({ arr: ['TOP', 'V5'] })

const onPush = () => {
  // list.push('EDG')

  // 模拟异步请求
  setTimeout(() => {
    let res = ['EDG', 'RNG', 'JDG']
    // 直接赋值不行，会破坏响应式对象 proxy
    // list = res
    // 可以使用 push 加解构
    // list.push(...res)
    list.arr = res
    console.log(list);
  }, 2000)
}

</script>

<style scoped>

</style>
