<template>

  <div>{{ Man }}</div>
  <button @click="change">修改</button>

</template>

<script setup lang='ts'>
import { ref,isRef } from 'vue';
import type { Ref } from 'vue'

// 第一种 ref 用法
// type M = {
//   name:string
// }
// const Man = ref<M>({name:"魏先生"})

// 第二种 ref 用法，接口 Ref
// type M = {
//   name:string
// }
// const Man:Ref<M> = ref({name:"魏先生"})

// ref 最简单的用法，有类型推导的
const Man = ref({name:"魏先生"})

// isRef 判断是否为 ref 对象即是否为响应式
const Man2 = {name:"魏先生"}

const change = ()=>{
  // 需要加上 .value 固定写法
  Man.value.name = '小魏'

  console.log('是否为',isRef(Man2));
  
}

</script>

<style scoped>

</style>
