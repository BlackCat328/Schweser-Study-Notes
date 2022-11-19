<template>

    <div>我是A组件</div>

</template>

<script setup lang='ts'>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
// beforeCreate created，在 setup 语法糖中是没有这两个生命周期的，就是用 setup 去代替

// setup 首先执行
console.log('setup');

con

// 创建
onBeforeMount(() => {
    console.log('创建之前 -->');
})
onMounted(() => {
    console.log('创建完成 -->');
})

// 更新
onBeforeUpdate(() => {
    console.log('更新组件之前 -->');
})
onUpdated(() => {
    console.log('更新组件完成 -->');
})

// 卸载
onBeforeUnmount(() => {
    console.log('卸载之前 -->');
})
onUnmounted(() => {
    console.log('卸载完成 -->');
})

</script>

<style scoped>

</style>