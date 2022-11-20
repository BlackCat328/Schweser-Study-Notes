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

// off 可以取消指定的mitt事件，取消的函数
// all.clear() 取消所有的mitt事件
const Bus = (params: any) => {
    console.log('我在B组件 --->', params)
}
ins?.proxy?.$Bus.on('wsgg', Bus)
ins?.proxy?.$Bus.on('we', Bus)
// ins?.proxy?.$Bus.off('wsgg', Bus)

ins?.proxy?.$Bus.all.clear()

</script>

<style scoped lang='less'>

</style>