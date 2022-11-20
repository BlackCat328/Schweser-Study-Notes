<template>

    <div class="B">{{ flag }}</div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

type Props = {
    flag: boolean
}

defineProps<Props>()

</script>

<style scoped lang='less'>
.B{
    width: 200px;
    
}
</style>