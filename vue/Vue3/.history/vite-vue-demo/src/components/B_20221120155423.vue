<template>

    <div class="B">
        <h1>我是B</h1>
    </div>

</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue';

const ins = getCurrentInstance()

// ins?.proxy?.$Bus.on('wsgg', (str: string) => {
//     console.log(str)
// })

// 监听到派发的全部事件，用 * 号
// ins?.proxy?.$Bus.on('*', (type: string, str: string) => {
//     console.log(type, str)
// })

const Bus = (type: string, str: string) => {
    console.log(type, str)
}

ins?.proxy?.$Bus.on('*', (type: string, str: string) => {
    console.log(type, str)
})

</script>

<style scoped lang='less'>

</style>