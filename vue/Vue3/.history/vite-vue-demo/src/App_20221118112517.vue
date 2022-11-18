<template>

  <div></div>

</template>

<script setup lang='ts'>
import { reactive } from 'vue';
/* 
  ref reactive
  1. ref 支持所有类型
  2. reactive 支持引用类型，如 Array Object Map Set...
*/

// 定义 reactive，直接定义有类型推导
let Man = reactive({ name: '魏先生', age: 23 })

// 手动定义
type M = {
  name: string,
  
}


</script>

<style scoped>

</style>
