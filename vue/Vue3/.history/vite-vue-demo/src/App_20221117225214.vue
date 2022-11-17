<template>

  <div>{{ Man }}</div>
  <button @click="">修改</button>

</template>

<script setup lang='ts'>
import { ref } from 'vue';

const Man = ref({name:"魏先生"})


</script>

<style scoped>

</style>
