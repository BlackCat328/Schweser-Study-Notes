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
    background: 'bl'
  },
  {
    height: 200,
    background: 'red'
  },
  {
    height: 100,
    background: 'red'
  },
  {
    height: 300,
    background: 'red'
  },
]


</script>

<style lang="less" scoped>

</style>