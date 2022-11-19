<template>

    <div class="layout">
        <div >
            <Menu />
        </div> 
        <div>
            <Header />
            <Content />
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
.layout {
    display: flex;
}
</style>