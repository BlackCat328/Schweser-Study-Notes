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
//引入子组件，直接引入直接可以在 template 中
import A from './components/A.vue';

</script>

<style scoped>

</style>