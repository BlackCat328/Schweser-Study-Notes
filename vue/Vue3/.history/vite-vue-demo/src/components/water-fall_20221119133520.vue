<template>

    <div>子组件</div>
    <div>值：{{ name }}</div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

// 接收父组件传过来的值
/* 
    在模板中可以直接调用 name
    za
*/
defineProps({
    name: {
        type: String,
        default: '默认值'
    }
})

</script>

<style scoped>

</style>