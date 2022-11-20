<template>

    <div class="C">
        <button @click="emitB">派发一个事件</button>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

const emit = defineEmits(['on-click'])
let flag = false
const emitB = () => {
    flag = !flag
}

</script>

<style scoped lang='less'>
.C {
    width: 200px;
    height: 200px;
    color: #fff;
    background: blue;
}
</style>