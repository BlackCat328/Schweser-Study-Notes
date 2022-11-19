<template>

    <div @click class="tree" v-for="(item, i) in data" :key="i">
        <input v-model="item.checked" type="checkbox"><span>{{ item.name }}</span>
        <!-- 组件递归 -->
        <!-- <Tree v-if="item?.children?.length" :data="item.children" /> -->

        <!-- 自定义递归组件name，需要再开一个script标签，里面去暴露名字 -->
        <!-- <Mrw v-if="item?.children?.length" :data="item.children" /> -->

        <!-- 运用插件 unplugin-vue-define-options，就不用再开一个script标签，直接调用 defineOptions -->
        <!-- 该插件需要到 vite.config.ts、tsconfig.json 中去配置 -->
        <Cjh v-if="item?.children?.length" :data="item.children" />
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}

defineOptions({
    name: 'Cjh'
})

const props = defineProps<{
    data?: Tree[]
}>()

</script>

<!-- <script lang="ts">
export default {
    name: 'Mrw'
}
</script> -->

<style scoped lang="less">
.tree {
    margin-left: 10px;
}
</style>