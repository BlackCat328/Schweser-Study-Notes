<template>

    <div class="B">
        <h1>我是B</h1>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

type Props = {
    flag: boolean
}

defineProps<Props>()

</script>

<style scoped lang='less'>
.B {
    width: 200px;
    height: 200px;
    color: #fff;
    background: red;
}
</style>