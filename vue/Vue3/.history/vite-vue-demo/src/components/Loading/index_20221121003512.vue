<template>

    <div v-if="isShow" class="loading">
        Loading...
    </div>

</template>

<script setup lang='ts'>

const isShow = ref<boolean>(false)

</script>

<style scoped lang='less'>
.loading{
    background: black;
    opacity: 0.8;
    font
}
</style>