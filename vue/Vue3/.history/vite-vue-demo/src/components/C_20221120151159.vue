<template>

    <div class="C">
        <h1>C</h1>
        {{ flag }}
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
.C {
    width: 200px;
    height: 200px;
    color: #fff;
    background: red;
}
</style>