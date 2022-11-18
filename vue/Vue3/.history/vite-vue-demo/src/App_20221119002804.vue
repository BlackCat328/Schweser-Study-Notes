<template>

  <div>
    case1: <input type="text" v-model="message">
    <hr>
    case2: <input type="text">
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive, watch } from 'vue';

let message = ref<string>('魏先生')

watch()

</script>

<style scoped>

</style>