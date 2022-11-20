<template>

    <div class="B">
        <h1>我是B</h1>
    </div>

</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue';

const ins = getCurrentInstance()

// ins?.proxy?.$Bus.on('wsgg', (str: any) => {
//     console.log(str)
// })

// 监听到派发的全部事件，用 * 号
// ins?.proxy?.$Bus.on('*', (type: string, str: any) => {
//     console.log(type, str)
// })

const Bus = (params: any) => {
    console.log('我在BZujia',params)
}
ins?.proxy?.$Bus.on('wsgg', Bus)
ins?.proxy?.$Bus.on('wei', Bus)

</script>

<style scoped lang='less'>

</style>