<template>

  <div>toRef: {{  }}</div>
  <button @click="change">修改</button>

</template>

<script setup lang='ts'>
import { reactive, toRef, toRefs, toRaw } from 'vue';
/* 
  toRef 只能修改响应式对象的值，非响应式视图毫无变化
*/

const Man = { name: 'tom', age: 12, like: 'jk' }

const like = toRef(Man, 'like')

const change = () => {
  like.value = '洛丽塔'
  console.log(like);
}

</script>

<style scoped>

</style>
