<template>

  <div>
    <Card />
    <Card />
  </div>
  <hr>
  <TreeVue :data='data' />

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
// 局部组件，想要成为全局组件则在 main.ts 中去注册
// import Card from "./components/Card.vue";
import TreeVue from './components/Tree.vue';

interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}

const data = reactive<Tree[]>([
  {
    name: '小魏1',
    checked: false,
    children: [
      {
        name: '小小魏',
        checked: false
      }
    ]
  },
  {
    name: '中魏',
    checked: false
  },
  {
    name: '老魏',
    checked: false,
    children: [
      {
        name: '大魏',
        checked: false,
        children: [
          {
            name: '小魏2',
            checked: false
          },
          {
            name: '小魏3',
            checked: true
          }
        ]
      }
    ]
  },
])

</script>

<style scoped lang="less">

</style>