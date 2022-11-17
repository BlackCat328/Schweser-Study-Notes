<template>

  <div>ref: {{ Man }}</div>
  <div>shallowRef: {{ Man3 }}</div>
  <button @click="changeRef">修改</button>
  <button @click="changeRef">修改</button>

</template>

<script setup lang='ts'>
import { ref,isRef,shallowRef } from 'vue';
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

// 许多种用法，泛型啊等等...

// ref 最简单的用法，有类型推导的
const Man = ref({name:"魏先生"})

// isRef 判断是否为 ref 对象即是否为响应式
const Man2 = {name:"TOM"}

// shallowRef 浅层次的响应式数据 ref 深层次
const Man3 = shallowRef({name:"BOB",age:{old:12,new:15}})

const changeRef = ()=>{
  // 需要加上 .value 固定写法
  // ref
  Man.value.name = '小魏'
  console.log('ref声明的Man -->',Man);

  // isRef
  console.log('Man2是否为ref对象 -->',isRef(Man2));

  // shallowRef
  Man3.value.name = 'lien'
  // Man3.value.age.old = 11
  // Man3.value = {
  //   name:'lien'
  // }
  Man3.value = {
    name:'lien',
    age:{
      old:11,
      new:19
    }
  }
  console.log('shallowRef声明的Man3 -->',Man3);
  
}

</script>

<style scoped>

</style>
