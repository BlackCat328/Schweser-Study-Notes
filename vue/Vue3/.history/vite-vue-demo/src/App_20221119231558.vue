<template>
  <div class="content">
    <el-button type="primary" @click="flag = !flag">切换显示</el-button>
    <transition name="fade">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const flag = ref<boolean>(true)

</script>

<style scoped lang='less'>
.box {
  width: 99%;
  height: 100%;
  margin: 20px auto;
  border: 1px solid #ccc;
}

.fade-enter-from {
  width: 0;
  height: 0;
}

.fade-enter-active {
  transition: all 1.5s ease;
}

.fade-enter-to {
  width: 400px;
  height: 500px;
}

.fade-leave-from {
  width: 400px;
  height: 500px;
}

.fade-enter-active {
  transition: all .3s ease;
}

.fade-enter-to {
  width: 0;
  height: 0;
}
</style>