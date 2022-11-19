<template>

    <div>我是A组件</div>
    <div ref="div">{{ str }}</div>
    <button @click="change">修改</button>

</template>

<script setup lang='ts'>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered } from 'vue';
// beforeCreate created，在 setup 语法糖中是没有这两个生命周期的，就是用 setup 去代替

// setup 首先执行
console.log('setup');

const str = ref<string>('魏先生')
const div = ref<HTMLDivElement>()
const change = () => {
    str.value = '我被更改了'
}

// 创建
onBeforeMount(() => {
    /* 
        onBeforeMount 里面获取不了 dom 元素
        要想获取则在 onMounted 中去获取
    */
    console.log('创建之前 -->', div.value);
})
onMounted(() => {
    console.log('创建完成 -->', div.value);
})

// 更新
onBeforeUpdate(() => {
    console.log('更新组件之前 -->', 'div更新之前的dom -->', div.value, 'div更新之前里面文本 -->', div.value?.innerText);
})
onUpdated(() => {
    console.log('更新组件完成 -->', 'div更新完成的dom -->', div.value, 'div更新完成里面文本 -->', div.value?.innerText);
})

// 卸载
onBeforeUnmount(() => {
    console.log('卸载之前 -->', div.value);
})
onUnmounted(() => {
    console.log('卸载完成 -->', div.value);
})

onRenderTracked((e) => {
    console.log();
})

onRenderTriggered(() => {

})

</script>

<style scoped>

</style>