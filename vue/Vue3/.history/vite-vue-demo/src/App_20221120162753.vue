<template>

  <div>
    <wsgg name="老魏" @wsgg="getItem"></wsgg>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
// tsx 当组件用
import wsgg from './App';

const getItem = (item:) => {
  console.log('父组件收到的',item)
}

</script>

<style scoped lang='less'>

</style>