<template>

  <div>{{ Man }}</div>
  <button @click="change">修改</button>

</template>

<script setup lang='ts'>
import { reactive, toRef, toRefs, toRaw } from 'vue';

const Man = { name: 'tom', age: 12, like: 'jk' }

const change = 

</script>

<style scoped>

</style>
