<template>

    <div v-if="modelValue" class="model">
        <div class="close"><button @click="close">关闭</button></div>
        <h3>我是v-model子组件 dialog</h3>
        <div>内容：<input</div>
    </div>

</template>

<script setup lang='ts'>

</script>

<style scoped lang='less'>
.model {
    width: 500px;
    border: 5px solid #ccc;
    padding: 10px;

    .close {
        float: right;
    }
}
</style>