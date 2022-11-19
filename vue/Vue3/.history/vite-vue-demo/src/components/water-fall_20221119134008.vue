<template>

    <div>子组件</div>
    <div>值：{{ name }}</div>
    <div>值：{{ arr }}</div>

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

// 接收父组件传过来的值，ts写法，泛型
// 定义默认值
const props = withDefaults(defineProps<{
    name: string,
    arr: number[]
}>(),{
    arr:() => {
    
    }
})
console.log(props.name)

</script>

<style scoped>

</style>