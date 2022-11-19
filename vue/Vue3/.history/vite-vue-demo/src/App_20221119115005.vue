<template>

  <div>
    我是父组件
  </div>
  <A></A>
  <A></A>
  <A></A>
  <A></A>
  <A></A>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
//引入
import A from './components/A.vue';

</script>

<style scoped>

</style>