<template>
    <div class="wraps">
        <div :style="{height:item.height+'px',background:item.background,left:item.left+'px',top:item.top+'px'}"
            class="items" v-for="item in waterList" />
    </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive } from 'vue';

// 接收传过来的值
const props = defineProps<{
    list: any[]
}>()

const waterList = reactive<any[]>([])

const heightList = reactive<number[]>([])

const init = () => {
    const width = 130
    const x = document.body.clientWidth
    const column = Math.floor(x / width)

    for (let i = 0; i < props.list.length; i++) {
        if (i < column) {
            props.list[i].left = i * width
            props.list[i].top = 20
            waterList.push(props.list[i])
            heightList.push(props.list[i].height)
        } else {
            let current = heightList[0]
            let index = 0
            heightList.forEach((h, i) => {
                if (current > h) {
                    
                }   
            })
        }
    }
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