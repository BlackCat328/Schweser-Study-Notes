<template>

    <h1>provideB.vue(孙子级别)</h1>
    <div>
        <button @click="change">修改provide的值</button>
    </div>
    <div class="box">

    </div>
    <hr>

</template>

<script setup lang='ts'>
import { ref, reactive, inject } from 'vue';
import type { Ref } from 'vue';

const color = inject<Ref<string>>('color')
// c
const color = inject<Ref<string>>('color', ref('red'))

const change = () => {
    color!.value = 'yellow'
}

</script>

<style scoped lang='less'>
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(color);
}
</style>