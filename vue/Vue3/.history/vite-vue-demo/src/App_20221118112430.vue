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

// 定义 reactive
let Man = reactive({ name: '魏先生' })

</script>

<style scoped>

</style>
