<template>

  <div>父组件</div>
  <hr>
  <waterFallVue @on-click :name="name" :arr="[1, 2, 3]" />

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import waterFallVue from './components/water-fall.vue';

let name = '魏先生'

</script>

<style lang="less" scoped>

</style>