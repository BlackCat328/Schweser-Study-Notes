<template>

    <div v-if="isShow" class="loading">
        Loading...
    </div>

</template>

<script setup lang='ts'>
import { fa } from 'element-plus/es/locale';


const isShow = ref<boolean>(fa)

</script>

<style scoped lang='less'>

</style>