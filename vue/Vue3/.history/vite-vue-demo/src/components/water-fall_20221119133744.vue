<template>

    <div>子组件</div>
    <div>值：{{ name }}</div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

// 接收父组件传过来的值，js写法
/*
    在模板中可以直接调用 name
    在代码中则需要接收
*/
// const props = defineProps({
//     name: {
//         type: String,
//         default: '默认值'
//     }
// })
// console.log(props.name)

// 接收父组件传过来的值，ts写法，fan'xing
const props = defineProps<{
    name: string
}>()
console.log(props.name)

</script>

<style scoped>

</style>