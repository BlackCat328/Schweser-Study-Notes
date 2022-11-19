<template>

    <div class="content">
        <A></A>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive,defineAsyncComponent } from 'vue';
// import A from '../../components/A/index.vue';

const A = defineAsyncComponent(()=>import('../../components/A'))

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