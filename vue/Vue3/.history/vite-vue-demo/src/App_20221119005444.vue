<template>

  <div>
    <input type="text" v-model="message">
    <input type="text" v-model="message2">
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive, watchEffect } from 'vue';

let message = ref<string>('飞机')
let message2 = ref<string>('坦克')

</script>

<style scoped>

</style>