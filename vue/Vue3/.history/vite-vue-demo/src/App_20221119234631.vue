<template>
  <div class="content">
    <el-button type="primary" @click="flag = !flag">切换显示</el-button>
    <!-- 自己写6个 -->
    <!-- <transition name="fade">
      <div v-if="flag" class="box"></div>
    </transition> -->

    <transition name="fade" enter-to-class="e-to" enter-from-class="">
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
  width: 400px;
  height: 500px;
  background: red;
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

.fade-leave-active {
  transition: all .3s ease;
}

.fade-leave-to {
  width: 0;
  height: 0;
}
</style>