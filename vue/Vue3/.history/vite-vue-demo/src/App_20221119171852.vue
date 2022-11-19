<template>

  <el-button type="primary" @click="onChange">切换组件</el-button>
  <div class="content">
    <A></A>
    <B></B>
  </div>
</template>

<script setup lang='ts'>
import { shallowRef, reactive, markRaw } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';

const flag = 

</script>

<style scoped lang='less'>
.content {
  width: 90%;
  height: 100%;
  margin: auto;
  border: 1px solid #ccc;
}
</style>