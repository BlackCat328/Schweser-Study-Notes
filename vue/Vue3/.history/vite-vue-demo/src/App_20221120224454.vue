<template>

  <div>
    <h1>我是APP.vue父组件</h1>
    <button @click="flag = !flag">切换</button>
    <hr>
    <!-- 自定义指令常规写法 -->
    <!-- 走卸载钩子 -->
    <vModelVue v-if="flag" v-move:wsgg="{ background: 'red' }"></vModelVue>
    <!-- 走更新钩子 -->
    <!-- <vModelVue v-move:wsgg="{ background: 'red', flag: flag }"></vModelVue> -->
  </div>

  <div>
    <vModelVue v-if="flag" v-move:wsgg="{ background: 'red' }"></vModelVue>
  </div>

</template>

<script setup lang='ts'>
import { Directive, DirectiveBinding } from 'vue';
import vModelVue from './components/v-model.vue';

let flag = ref(true)

/* 
  自定义指令生命周期：
    created、beforeMount、mounted、beforeUpdate、updated、beforeUnmount、unmounted
  常用的生命周期：
    mounted、updated、unmounted
*/

type Dir = {
  background: string
}

const vMove: Directive = {
  created() {
    console.log('created')
  },
  beforeMount(...args: Array<any>) {
    // 每个生命周期钩子里面都能获取到 args 参数
    console.log('beforeMount')
    console.log('beforeMount ===> params --->', args)
  },
  mounted(el: HTMLElement, dir: DirectiveBinding<Dir>) {
    // 解构出 el dir 参数
    console.log('mounted')
    console.log('mounted ===> params --->', el, dir)
    el.style.background = dir.value.background

  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }
}

// 函数简写自定义指令
const vWs: Directive = (el: HTMLElement, dir: DirectiveBinding<Dir>) => {

}

</script>

<style scoped lang='less'>

</style>