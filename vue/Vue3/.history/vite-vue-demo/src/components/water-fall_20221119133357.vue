<template>

    <div>子组件</div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

// 接收父组件传过来的值
defineProps({
    name: {
        type: String,
        default: '默认值'
    }
})

</script>

<style scoped>

</style>