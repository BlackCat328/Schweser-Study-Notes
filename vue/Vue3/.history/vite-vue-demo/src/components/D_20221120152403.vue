<template>

    <div class="D">
        <h1>D</h1>
        {{ Flag }}
    </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue';
import Bus from '../Bus';

let Flag = ref(false)

Bus.on('on-click', (flag: boolean) => {

})
</script>

<style scoped lang='less'>
.D {
    width: 200px;
    height: 200px;
    color: #fff;
    background: skyblue;
}
</style>