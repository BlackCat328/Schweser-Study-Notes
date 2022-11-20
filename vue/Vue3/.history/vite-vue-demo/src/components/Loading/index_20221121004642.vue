<template>

    <div v-if="isShow" class="loading">
        Loading...
    </div>

</template>

<script setup lang='ts'>

const isShow = ref<boolean>(false)

const show = () => isShow.value = true
const hide = () => isShow.value = false

defineExpose({
    show,
    hide,
    
})

</script>

<style scoped lang='less'>
.loading {
    background: black;
    opacity: 0.8;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
}
</style>