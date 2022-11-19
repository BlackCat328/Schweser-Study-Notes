<template>
  <div class="content">
    <el-button type="primary" @click="flag = !flag">切换显示</el-button>
    <!-- 自己写6个 -->
    <!-- <transition name="fade">
      <div v-if="flag" class="box"></div>
    </transition> -->

    <!-- 自定义类，可以结合第三方动画库 Animate.css -->
    <!-- <transition enter-to-class="e-to" enter-active-class="e-active" enter-from-class="e-from">
      <div v-if="flag" class="box"></div>
    </transition> -->

    <!-- 生命周期钩子 -->
    <transition @before-enter="EnterFrom" @enter="EnterActive" @after-enter="EnterTo" @enter-cancelled="EnterCncel">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const flag = ref<boolean>(true)

const EnterFrom = (el: Element) => {
  console.log('进入之前')
}

const EnterActive = (el: Element, done) => {
  console.log('过渡曲线')
}

const EnterTo = (el: Element) => {
  console.log('过渡完成')
}

const EnterCncel = (el: Element) => {
  console.log('过渡效果被打断')
}

</script>

<style scoped lang='less'>
.box {
  width: 400px;
  height: 500px;
  background: red;
}

// 6个
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

//自定义类
.e-to {
  width: 400px;
  height: 500px;
}

.e-active {
  transition: all .3s ease;
}

.e-from {
  width: 0;
  height: 0;
}
</style>