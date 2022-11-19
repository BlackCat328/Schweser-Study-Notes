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
        <section>
            <!-- 作用域插槽 -->
            <div v-for="">

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

type names = {
    name: string,
    age: number
}

const data = reactive<names[]>([
    {
        name: '魏先生1',
        age: 15
    },
    {
        name: '魏先生2',
        age: 16
    },
    {
        name: '魏先生3',
        age: 17
    },
    {
        name: '魏先生4',
        age: 18
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

section {
    height: 300px;
    background: orange;
    color: #fff;
}

.footer {
    height: 200px;
    background: blue;
    color: #fff;
}
</style>