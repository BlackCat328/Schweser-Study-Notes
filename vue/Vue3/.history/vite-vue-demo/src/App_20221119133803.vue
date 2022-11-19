<template>

  <div>父组件</div>
  <hr>
  <waterFallVue :name="name" :arr="" />

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import waterFallVue from './components/water-fall.vue';

let name = '魏先生'

</script>

<style lang="less" scoped>

</style>