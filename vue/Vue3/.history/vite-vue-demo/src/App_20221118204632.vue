<template>

  <div>toRef: {{ like }}</div>
  <button @click="change">修改</button>

</template>

<script setup lang='ts'>
import { reactive, toRef, toRefs, toRaw } from 'vue';
/* 
  1. toRef 只能修改响应式对象的值，非响应式视图毫无变化
  
  2. toRefs
*/

// toRef
const Man = reactive({ name: 'tom', age: 12, like: 'jk' })

const like = toRef(Man, 'like')

const change = () => {
  like.value = '洛丽塔'
  console.log(like);
}

// toRefs
// 源码
const toRefs = <T extends object>(object: T) => {
  const map: any = {}

  for (let key in object) {
    map[key] = toRef(object, key)
  }
}

const {} = toRefs(Man)

</script>

<style scoped>

</style>
