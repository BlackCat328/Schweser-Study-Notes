<template>

    <div class="content">
        <S
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive, defineAsyncComponent } from 'vue';

// 异步组件写法
const A = defineAsyncComponent(() => import('../../components/A/index.vue'))

</script>

<style lang="less" scoped>
.content {
    flex: 1;
    margin: 20px;
    border: 1px solid #ccc;
    overflow: auto;

    &-items {
        padding: 20px;
        border: 1px solid #ccc;
    }
}
</style>