<template>

    <div>test</div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { axios } from './server'

// 在
const list = await axios('./data.json')

console.log(list)

</script>

<style scoped>

</style>