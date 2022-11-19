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
    <!-- <transition @before-enter="EnterFrom" @enter="EnterActive" @after-enter="EnterTo" @enter-cancelled="EnterCncel"
      @before-leave="LeaveFrom" @leave="LeaveActive" @after-leave="LeaveTo" @leave-cancelled="LeaveCncel">
      <div v-if="flag" class="box"></div>
    </transition> -->

    <!-- 通过 gsap 库来实现 -->
    <!-- <transition @before-enter="EnterFrom1" @enter="EnterActive1" @leave="LeaveActive1">
      <div v-if="flag" class="box"></div>
    </transition> -->

    <!-- appear -->
    <transition appear-from-class="from" appear-active-class="active"  appear-to-class="to">
      <div v-if="flag" class="box"></div>
    </transition>

  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import gsap from 'gsap';

const flag = ref<boolean>(true)

// enter
const EnterFrom = (el: Element) => {
  console.log('进入之前')
}

const EnterActive = (el: Element, done: Function) => {
  console.log('进入过渡曲线')
  setTimeout(() => {
    done()
  }, 2000)
}

const EnterTo = (el: Element) => {
  console.log('进入过渡完成')
}

const EnterCncel = (el: Element) => {
  console.log('进入过渡效果被打断')
}

// leave
const LeaveFrom = (el: Element) => {
  console.log('离开之前')
}

const LeaveActive = (el: Element, done: Function) => {
  console.log('离开过渡曲线')
  setTimeout(() => {
    done()
  }, 2000)
}

const LeaveTo = (el: Element) => {
  console.log('离开过渡完成')
}

const LeaveCncel = (el: Element) => {
  console.log('离开过渡效果被打断')
}

/* 
  通过 gsap 库来实现，是个js动画库
*/
const EnterFrom1 = (el: Element) => {
  gsap.set(el, {
    width: 0,
    height: 0
  })
}

const EnterActive1 = (el: Element, done: gsap.Callback) => {
  gsap.to(el, {
    width: 200,
    height: 200,
    onComplete: done
  })
}

const LeaveActive1 = (el: Element, done: gsap.Callback) => {
  gsap.to(el, {
    width: 0,
    height: 0,
    onComplete: done
  })
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

//appear
.to {
  width: 400px;
  height: 500px;
}

.from {
  width: 0;
  height: 0;
}

.active {
  transition: all .3s ease;
}
</style>