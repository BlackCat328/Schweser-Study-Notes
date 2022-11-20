<template>

    <div class="A">
        A组件
    </div>

</template>

<script setup lang='ts'>
import { useAttrs } from 'vue'

let attr = useAttrs()

console.log('')

</script>

<style scoped lang='less'>
.A {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
}
</style>