<template>

  <div>
    <h1>我是APP.vue父组件</h1>
    <hr>
    <vModelVue v-move="{background:}"></vModelVue>
  </div>

</template>

<script setup lang='ts'>
import { Directive } from 'vue';
import vModelVue from './components/v-model.vue';

const isShow = ref<boolean>(true)

const text = ref<string>('魏先生')

const vMove: Directive = {
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
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