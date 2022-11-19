<template>

    <div>
        <div>
            <Menu></Menu>
        </div>
        <div>
            <Header></Header>
            <Content>
        </div>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import Menu from './Menu/index.vue';
import Header from './Header/index.vue';
import Content from './Content/index.vue';

</script>

<style lang="less" scoped>

</style>