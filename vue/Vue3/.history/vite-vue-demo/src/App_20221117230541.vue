<template>

  <div>{{ Man }}</div>
  <button @click="change">修改</button>

</template>

<script setup lang='ts'>
import { ref } from 'vue';
import type { Ref } from 

// 第一种 ref 用法
// type M = {
//   name:string
// }
// const Man = ref<M>({name:"魏先生"})

// 第二种 ref 用法
type M = {
  name:string
}
const Man = ref<M>({name:"魏先生"})

const change = ()=>{
  Man.name = '小魏'
}

</script>

<style scoped>

</style>
