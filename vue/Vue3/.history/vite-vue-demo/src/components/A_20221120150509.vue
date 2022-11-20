<template>

    <div>
        <button @click="emitB">派发一个事件</button>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

const emit = defineEmits(['on-click'])
let 
const emitB = () => {
    emit('on-click',)
}

</script>

<style scoped lang='less'>

</style>