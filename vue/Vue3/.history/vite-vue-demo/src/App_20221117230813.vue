<template>

  <div>{{ Man }}</div>
  <button @click="change">修改</button>

</template>

<script setup lang='ts'>
import { ref } from 'vue';
import type { Ref } from 'vue'

// 第一种 ref 用法
// type M = {
//   name:string
// }
// const Man = ref<M>({name:"魏先生"})

// 第二种 ref 用法
// type M = {
//   name:string
// }
// const Man:Ref<M> = ref({name:"魏先生"})

// 最简单的
const Man = ref({name:"魏先生"})

const change = ()=>{
  // 需要加上 .value 固定写法
  Man.value.name = '小魏'
}

</script>

<style scoped>

</style>
