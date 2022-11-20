<template>

    <div class="B">
        <h1>我是B</h1>
    </div>

</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue';

const ins = getCurrentInstance()

ins?.proxy?.$Bus.on('wsgg',(str)=>{
    log
})

</script>

<style scoped lang='less'>

</style>