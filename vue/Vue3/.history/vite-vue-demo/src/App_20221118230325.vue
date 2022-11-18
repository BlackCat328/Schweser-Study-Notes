<template>

  <div>
    <input type="text" v-model="firstName">
    <input type="text" v-model="">
  </div>

</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';

let firstName = ref('')
let lastName = ref('')

</script>

<style scoped>

</style>