<template>

  <div>父组件</div>
  <hr>
  <waterFallVue ref="waterFall" @on-click="getName" :name="name" :arr="[1, 2, 3]" />

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import waterFallVue from './components/water-fall.vue';

const waterFall = ref<InstanceType<typeof waterFallVue>>()

let name = '魏先生'

// 接收子组件传过来的值
const getName = (name: string, num: number) => {
  console.log('父组件收到传的值', name, '----', num)
  waterFall.value?.open()
  console.log(waterFall.value?name)
}

</script>

<style lang="less" scoped>

</style>