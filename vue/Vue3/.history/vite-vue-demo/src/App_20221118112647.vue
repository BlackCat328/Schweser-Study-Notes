<template>

  <div></div>

</template>

<script setup lang='ts'>
import { reactive } from 'vue';
/* 
  ref reactive
  1. ref 支持所有类型
  2. reactive 支持引用类型，如 Array Object Map Set...
  3. ref 
*/

// 定义 reactive，直接定义有类型推导
let Man = reactive({ name: '魏先生', age: 23 })

// 手动定义 接收泛型
type M = {
  name: string;
  age: number;
}
let Man1 = reactive<M>({ name: '刘先生', age: 22 })




</script>

<style scoped>

</style>
