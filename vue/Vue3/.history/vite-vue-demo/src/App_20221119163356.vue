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
.parent{
  height: 50vh;
  bac
}
</style>