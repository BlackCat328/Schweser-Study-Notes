<template>
  <div class="parent">
    <h1>我是父级</h1>
    <A></A>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import A from './components/A.vue';

</script>

<style lang="less">
*{
  padding: 0;
  m
}
.parent {
  height: 50vh;
  background: yellow;
}
</style>