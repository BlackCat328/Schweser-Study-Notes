<template>

    <div>
        <header class="header">
            <!-- 具名插槽 -->
            <slot name='header' />
        </header>

        <main class="main">
            <!-- 匿名插槽 -->
            <!-- <slot></slot> -->
        </main>

        <section>
            <!-- 作用域插槽 -->
            <div v-for="item in data">
                <slot :data="item" />
            </div>
        </section>

        <footer class="footer">
            <!-- 具名插槽 -->
            <slot name='footer' />
        </footer>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

</script>

<style scoped>

</style>