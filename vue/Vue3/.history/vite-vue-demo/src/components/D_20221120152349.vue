<template>

    <div class="D">
        <h1>D</h1>
        {{ flag }}
    </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue';
import Bus from '../Bus';

let flag

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