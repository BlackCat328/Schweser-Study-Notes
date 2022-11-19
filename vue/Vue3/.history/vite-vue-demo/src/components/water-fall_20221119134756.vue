<template>

    <div>子组件</div>
    <div>值：{{ name }}</div>
    <div>值：{{ arr }}</div>
    <hr>
    <button @click="send">给父组件传值</button>

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
// 定义默认值 withDefaults
const props = withDefaults(
    defineProps<{
        name: string,
        arr: number[]
    }>(),
    // 第二个参数对象里面使用函数定义默认值
    {
        name: () => '小魏',
        arr: () => [666]
    }
)

// 子组件给父组件传值，最简单的方式 defineEmits
// const emit = defineEmits(['on-click'])
// const send = () => {
//     emit('on-click', '老魏', 666)
// }

//
const emit = defineEmits

console.log(props.name)

</script>

<style scoped>

</style>