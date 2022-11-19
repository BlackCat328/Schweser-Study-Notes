<template>

  <div>
    我是父组件
  </div>
  <A></A>
  <button @click="flag = !flag">创建-销毁</button>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
//引入子组件，直接引入直接可以在 template 中用，不用注册，可复用
import A from './components/A.vue';

const flag = ref<Boolean>(false)

</script>

<style scoped>

</style>