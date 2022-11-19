<template>

    <div v-for="item in data">
        <input v-model type="checkbox"><span>{{ item.name }}</span>
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

<style scoped lang="less">

</style>