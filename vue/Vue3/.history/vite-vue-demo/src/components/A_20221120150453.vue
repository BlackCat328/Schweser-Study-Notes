<template>

    <div>
        <button @click="emitB">派发一个事件</button>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

const emit = defineEmits(['on-click'])

const emitB = () => {
    emit('')
}

</script>

<style scoped lang='less'>

</style>