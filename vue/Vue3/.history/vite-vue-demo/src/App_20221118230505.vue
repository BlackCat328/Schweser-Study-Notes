<template>

  <div>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <div>{{ firstName }}---{{ lastName }}</div>
  </div>

</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';

let firstName = ref('')
let lastName = ref('')

const name = computed(() => {
  return firstName.value+
})

</script>

<style scoped>

</style>