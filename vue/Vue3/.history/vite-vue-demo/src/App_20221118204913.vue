<template>

  <div>toRef: {{ like }}</div>
  <button @click="change">修改</button>

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

const change = () => {
  likes.value = '洛丽塔'
  console.log(likes);
}

// toRefs
// 源码
const toRefs = <T extends object>(object: T) => {
  const map: any = {}

  for (let key in object) {
    map[key] = toRef(object, key)
  }
}

const Man1 = reactive({name:'魏先生'})
const { name, age, like } = toRefs(Man)

</script>

<style scoped>

</style>
