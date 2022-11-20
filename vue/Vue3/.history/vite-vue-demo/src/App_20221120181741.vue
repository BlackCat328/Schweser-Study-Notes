<template>

  <div>
    <h1>我是APP.vue父组件</h1>
    <div><button>开关</button></div>
    <hr>
    <vModelVue v-model="isShow"></vModelVue>
  </div>

</template>

<script setup lang='ts'>
import vModelVue from './components/v-model.vue';

const isShow = ref<>(true)

</script>

<style scoped lang='less'>

</style>