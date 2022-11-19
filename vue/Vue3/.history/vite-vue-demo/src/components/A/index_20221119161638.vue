<template>

    <div v-for="item in list">{{item}}</div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { axios } from './server'

// 在 setup 语法糖中可以直接使用 await
const list = await axios('./data.json')

console.log(list)

</script>

<style scoped>

</style>