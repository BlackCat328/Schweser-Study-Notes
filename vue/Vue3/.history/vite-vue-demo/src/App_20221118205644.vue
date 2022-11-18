<template>

  <div>toRef: {{ likes }}</div>
  <button @click="change1">修改</button>
  <hr>
  <div>toRefs: {{ Man1 }}</div>
  <button @click="change2">修改</button>

</template>

<script setup lang='ts'>
import { reactive, toRef, toRefs, toRaw } from 'vue';
/* 
  1. toRef 只能修改响应式对象的值，非响应式视图毫无变化
  
  2. toRefs 循环调用 toRef
*/



// toRef
const Man = reactive({ name: 'tom', age: 12, like: 'jk' })
const likes = toRef(Man, 'like')

const change1 = () => {
  likes.value = '洛丽塔'
  console.log(likes);
}

// toRefs
// 源码实现
const toRefs2 = <T extends object>(object: T) => {
  const map: any = {}

  for (let key in object) {
    map[key] = toRef(object, key)
  }

  return map
}

const Man1 = reactive({ name: '魏先生', age: 12 })
const { name, age } = toRefs(Man1)

const change2 = () => {
  name.value = '小魏'
  age.value = 23
  console.log(name, age);
}

</script>

<style scoped>

</style>
