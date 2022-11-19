<template>

  <div>
    <Card />
    <Card />
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
// 局部组件，想要成为全局组件则在 main.ts 中去注册
// import Card from "./components/Card.vue";

interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}

const data = reactive<Tree[]>([
  {
    name: '小魏',
    checked: false,
    children:[
      {}
    ]
  },
  {
    name: '中魏',
    checked: false
  },
  {
    name: '老魏',
    checked: false
  },
])

</script>

<style scoped lang="less">

</style>