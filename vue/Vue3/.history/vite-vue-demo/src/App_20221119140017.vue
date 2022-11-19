<template>

  <waterFallVue :list="list" />

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import waterFallVue from './components/water-fall.vue';

const list = [
  {
    height: 300,
    background: 'red'
  },
  {
    height: 400,
    background: 'pink'
  },
  {
    height: 500,
    background: 'blue'
  },
  {
    height: 200,
    background: 'skyblue'
  },
  {
    height: 100,
    background: 'purple'
  },
  {
    height: 300,
    background: 'yellow'
  },
  {
    height: 300,
    background: 'orange'
  },
  {
    height: 400,
    background: 'green'
  },
  {
    height: 500,
    background: 'blue'
  },
  {
    height: 200,
    background: 'skyblue'
  },
  {
    height: 100,
    background: 'purple'
  },
  {
    height: 300,
    background: 'yellow'
  },
]


</script>

<style lang="less" scoped>

</style>