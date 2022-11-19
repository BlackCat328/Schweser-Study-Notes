<template>

    <div>test</div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { axios } from './server'

const list = await axios('./da')

</script>

<style scoped>

</style>