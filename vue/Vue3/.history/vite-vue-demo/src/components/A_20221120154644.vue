<template>

    <div class="A">
        <h1>我是A</h1>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

const emit = defineEmits(['on-click'])
let flag = false
const emitB = () => {
    flag = !flag
    emit('on-click', flag)
}

</script>

<style scoped lang='less'>
.A {
    width: 200px;
    height: 200px;
    color: #fff;
    background: blue;
}
</style>