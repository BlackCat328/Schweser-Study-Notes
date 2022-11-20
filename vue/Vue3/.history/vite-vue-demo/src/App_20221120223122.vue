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

type 

const vMove: Directive = {
  created() {
    console.log('created')
  },
  beforeMount(...args: Array<any>) {
    console.log('beforeMount')
    console.log('beforeMount ===> params --->', args)
  },
  mounted(el: HTMLElement, dir: DirectiveBinding<Dir>) {
    console.log('mounted')
    console.log('mounted ===> params --->', args)
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