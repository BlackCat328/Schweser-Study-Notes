<template>

    <div class="content">
        <div :key="" v-for="item in 100"></div>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

</script>

<style lang="less" scoped>
.content {
    flex: 1;
    margin: 20px;
    border: 1px solid #ccc;
}
</style>