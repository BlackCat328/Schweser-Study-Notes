<template>

    <div class="A">
        <h1>我是A</h1>
        <button @click="emit">emit</button>
    </div>

</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue';

const ins = getCurrentInstance()

const emit = () => {
    ins?.proxy.$
}

</script>

<style scoped lang='less'>

</style>