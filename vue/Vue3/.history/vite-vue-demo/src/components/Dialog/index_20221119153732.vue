<template>

    <div>
        <header class="header"></header>
        <main class="main"></main>
        <footer class="footer"></footer>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

</script>

<style scoped lang="less">
.header {
    height: 200px;
    background: red;
    color: #fff;
}

.main {
    height: 300px;
    background: green;
    color: #fff;
}

.footer {
    height: 200px;
    background: blue;
    color: #fff;
}
</style>