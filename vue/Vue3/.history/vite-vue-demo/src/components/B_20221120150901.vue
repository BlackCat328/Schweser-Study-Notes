<template>

    <div class="B">
        <h1>B</h1>
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
.B {
    width: 200px;
    height: 200px;
    color: #fff;
}
</style>