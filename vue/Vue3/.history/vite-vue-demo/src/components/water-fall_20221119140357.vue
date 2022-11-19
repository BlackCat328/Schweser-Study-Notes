<template>
    <div class="wraps">
        <div class="items"></div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive } from 'vue';

// 接收传过来的值
const props = defineProps<{
    list: any[]
}>()

const init = () => {

}

onMounted(() => {
init()
})

</script>

<style scoped lang="less">
.wraps {
    position: relative;

    .items {
        position: absolute;
        width: 120px;
    }
}
</style>