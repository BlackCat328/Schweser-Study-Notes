<template>

  <div>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <div>{{firstName}}---</div>
  </div>

</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';

let firstName = ref('')
let lastName = ref('')

</script>

<style scoped>

</style>