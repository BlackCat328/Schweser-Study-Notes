<template>

    <div v-if="isShow" class="loading">
        Loading...
    </div>

</template>

<script setup lang='ts'>

const isShow = ref<boolean>(false)

</script>

<style scoped lang='less'>

</style>