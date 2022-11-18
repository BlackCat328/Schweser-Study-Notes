<template>

  <div>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <div>拼接：{{ firstName }}---{{ lastName }}</div>
    <div>计算属性1：{{ name }}</div>
    <div>计算属性2：{{ name }}</div>
  </div>

</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';

let firstName = ref('')
let lastName = ref('')

// 最常用方式
const name = computed(() => {
  return firstName.value + '--------' + lastName.value
})

// 另外一种
const name1 = computed({
  get() {
    return firstName.value + '--------' + lastName.value
  },
  set() {
    firstName.value + '--------' + lastName.value
  }
})

</script>

<style scoped>

</style>