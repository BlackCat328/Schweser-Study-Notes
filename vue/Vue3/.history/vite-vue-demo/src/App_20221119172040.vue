<template>

  <el-button type="primary" @click="flag = !flag">切换组件</el-button>
  <div class="content">
    <A v-if="flag"></A>
    <B v-else-if="!flag"></B>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';

const flag = ref(true)

</script>

<style scoped lang='less'>
.content {
  width: 100%;
  height: 100%;
  margin: auto;
  border: 1px solid #ccc;
}
</style>