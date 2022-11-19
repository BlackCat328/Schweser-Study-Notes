<template>

    <div>我是A组件</div>

</template>

<script setup lang='ts'>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
// beforeCreate created，在 setup 语法糖中是没有这两个生命周期的，就是用 setup 去代替

// setup 首先执行
console.log('setup');

// 创建
onBeforeMount(() => {
    console.log('创建之前 -->');
})
onMounted(() => {
    console.log('创建完成 -->');
})

// 更新
onBeforeUpdate(() => {

})
onUpdated(() => {

})

// 卸载
onBeforeUnmount(() => {

})
onUnmounted(() => {

})

</script>

<style scoped>

</style>