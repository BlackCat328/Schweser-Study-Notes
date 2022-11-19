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
]


</script>

<style lang="less" scoped>

</style>