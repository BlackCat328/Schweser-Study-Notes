<template>

    <div v-if="modelValue" class="model">
        <div class="close"><button @click="close">关闭</button></div>
        <h3>我是v-model子组件 dialog</h3>
        <div>内容：<input @input="change" type="text" :value="textVal"></div>
    </div>

</template>

<script setup lang='ts'>

defineProps<{
    modelValue: boolean,
    textVal: string
}>()

// update:modelValue 固定写法
const emit = defineEmits(['update:modelValue', 'update:textVal'])

const close = () => {
    emit('update:modelValue', false)
}

const change = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:textVal', target.value)
}

</script>

<style scoped lang='less'>
.model {
    width: 500px;
    border: 5px solid #ccc;
    padding: 10px;

    .close {
        float: right;
    }
}
</style>