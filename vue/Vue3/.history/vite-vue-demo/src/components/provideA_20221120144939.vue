<template>

    <h1>provideA.vue(父亲级别)</h1>
    <div class="box">

    </div>
    <hr>
    <provideBVue></provideBVue>

</template>

<script setup lang='ts'>
import { ref, reactive, inject } from 'vue';
import type { Ref } from 'vue';
import provideBVue from "./provideB.vue";

const color = inject<Ref<string>>('color')

</script>

<style scoped lang='less'>
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    
}
</style>