<template>

  <div>{{ Man }}</div>
  <button @click="change">修改</button>

</template>

<script setup lang='ts'>
import { ref } from 'vue';
type M = {
  name:string
}
const Man = ref<>({name:"魏先生"})

const change = ()=>{
  Man.name = '小魏'
}

</script>

<style scoped>

</style>
