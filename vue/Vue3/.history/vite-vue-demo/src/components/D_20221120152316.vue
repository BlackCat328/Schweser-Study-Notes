<template>

    <div class="D">
        <h1>D</h1>
        {{ flag }}
    </div>

</template>

<script setup lang='ts'>
import Bus from '../Bus';

Bus.on('on-click', () => {
    
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