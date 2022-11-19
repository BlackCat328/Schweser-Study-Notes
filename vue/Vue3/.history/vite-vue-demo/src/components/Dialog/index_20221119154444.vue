<template>

    <div>
        <header class="header">
            <!-- 具名插槽 -->
            <slot name='header' />
        </header>
        <main class="main">
            <!-- 匿名插槽 -->
            <slot></slot>
        </main>
        <footer class="footer">
            <!-- 具名插槽 -->
            <slot name='footer' />
        </footer>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

type names = {
    name: string,
    age: number
}

const data = reactive<names[]>([
    {
        
    }
])

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