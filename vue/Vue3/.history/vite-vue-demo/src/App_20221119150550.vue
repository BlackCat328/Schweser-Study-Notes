<template>



</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import AVue from './components/A.vue';
import BVue from './components/B.vue';
import CVue from './components/C.vue';

const data = reactive([
  {
    name: 'A组件',
    com: AVue
  },
  {
    name: 'B组件',
    com: BVue
  },
  {
    name: 'A组件',
    com: AVue
  },
])

</script>

<style scoped lang="less">

</style>