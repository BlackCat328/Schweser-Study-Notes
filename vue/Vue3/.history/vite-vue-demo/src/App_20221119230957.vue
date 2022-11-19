<template>
  <div class="content">
    <el-button type="primary" @click="flag = !flag">切换组件</el-button>
    <transition>
      <A v-if="flag"></A>
      <B v-else></B>
    </transition>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';

const flag = ref<boolean>(true)

</script>

<style scoped lang='less'>
.content {
  width: 99%;
  height: 100%;
  margin: 20px auto;
  border: 1px solid #ccc;
}

.fade-enter-from {
  width: 0;
  height: 0;
}

.fade-enter-active{
  rt
}

.fade-enter-to {
  width: 99%;
  height: 100%;
}
</style>