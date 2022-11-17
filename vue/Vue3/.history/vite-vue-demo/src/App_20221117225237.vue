<template>

  <div>{{ Man }}</div>
  <button @click="change">修改</button>

</template>

<script setup lang='ts'>
import { ref } from 'vue';

const Man = ref({name:"魏先生"})

const change = ()=>{
  Man.name
}

</script>

<style scoped>

</style>
