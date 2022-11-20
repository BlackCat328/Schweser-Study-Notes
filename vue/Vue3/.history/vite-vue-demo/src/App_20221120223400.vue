<template>

  <div>
    <h1>我是APP.vue父组件</h1>
    <hr>
    <vModelVue v-move:wsgg="{ background: 'red' }"></vModelVue>
  </div>

</template>

<script setup lang='ts'>
import { Directive, DirectiveBinding } from 'vue';
import vModelVue from './components/v-model.vue';

/* 
  z
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

</script>

<style scoped lang='less'>

</style>