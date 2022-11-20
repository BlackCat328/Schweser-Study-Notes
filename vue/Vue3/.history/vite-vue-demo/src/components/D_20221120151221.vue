<template>

    <div class="D">
        <h1>D</h1>
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
.D {
    width: 200px;
    height: 200px;
    color: #fff;
    background: s;
}
</style>