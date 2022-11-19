<template>

    <div class="card">
        <header>
            <div>标题</div>
            <div>副标题</div>
        </header>

        <section>
            内容
        </section>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

</script>

<style scoped lang="less">
@
.card{
    border: 1px solid;
}
</style>