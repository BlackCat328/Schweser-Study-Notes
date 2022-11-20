<template>

  <div>
    <h1>我是APP.vue父组件</h1>
    <div>isShow：{{ isShow }}</div>
    <div>text{{ isShow }}</div>
    <div><button @click="isShow = !isShow">开关</button></div>
    <hr>
    <vModelVue v-model="isShow" v-model:textVal="text"></vModelVue>
  </div>

</template>

<script setup lang='ts'>
import vModelVue from './components/v-model.vue';

const isShow = ref<boolean>(true)

const text = ref<string>('魏先生')

</script>

<style scoped lang='less'>

</style>