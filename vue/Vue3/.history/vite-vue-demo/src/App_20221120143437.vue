<template>
  <div>
    <input type="number" step="20" >
    <transition-group class="wraps" tag="div" move-class="move">
      <div class="items" v-for="item in list" :key="item.id">{{ item.number }}</div>
    </transition-group>
  </div>
</template>

<script setup lang='ts'>
import { reactive, watch } from 'vue';
import gsap from 'gsap';

const num = reactive({
  current: 0,
  tweenedNumber: 0
})

</script>

<style scoped lang='less'>
.wraps {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 10 + 9px);

  .items {
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

//过渡效果
.move {
  transition: all 1s;
}
</style>