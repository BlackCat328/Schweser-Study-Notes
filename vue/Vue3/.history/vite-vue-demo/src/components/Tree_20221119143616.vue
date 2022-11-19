<template>

    <div v-for="item in data">
        <input type="checkbox"><span></span>
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