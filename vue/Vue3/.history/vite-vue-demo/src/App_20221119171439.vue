<template>

  <el-button type="primary" @click="onChange">切换组件</el-button>
  <div>

  </div>

</template>

<script setup lang='ts'>
import { ref, reactive, markRaw } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';

const comId

const comList = reactive([
  {
    name: 'A',
    com: markRaw(A)
  },
  {
    name: 'B',
    com: markRaw(B)
  }
])

const onChange = () => {

}

</script>

<style scoped lang='less'>

</style>