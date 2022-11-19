<template>

    <div class="tree" v-for="(item, i) in data" :key="i">
        <input v-model="item.checked" type="checkbox"><span>{{ item.name }}</span>
        <Tree v-if="item?.children?.length" :data="item.children" />
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}

const props = defineProps<{
    data?: Tree[]
}>()

</script>

<script lang="ts">
export
</script>

<style scoped lang="less">
.tree {
    margin-left: 10px;
}
</style>