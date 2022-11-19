<template>

    <div></div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}

const props = defineProps<{
    data:
}>()

</script>

<style scoped lang="less">

</style>