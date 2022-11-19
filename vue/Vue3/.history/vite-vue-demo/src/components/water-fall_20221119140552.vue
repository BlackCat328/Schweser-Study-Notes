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
    const width = 130
    const x = document.body.clientWidth
    const column = Math.floor(x / width)

    for (let i = 0; i < props.list.length; i++) {
        if(i<column){
            
            private _value : string;
            public get value() : string {
                return this._value;
            }
            public set value(v : string) {
                this._value = v;
            }
            
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