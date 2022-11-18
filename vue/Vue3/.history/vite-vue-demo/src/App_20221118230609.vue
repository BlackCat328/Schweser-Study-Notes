<template>

  <div>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <div>拼接：{{ firstName }}---{{ lastName }}</div>
    <div>计算属性：{{ name }}</div>
  </div>

</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';

let firstName = ref('')
let lastName = ref('')

// 
const name = computed(() => {
  return firstName.value + '--------' + lastName.value
})

</script>

<style scoped>

</style>