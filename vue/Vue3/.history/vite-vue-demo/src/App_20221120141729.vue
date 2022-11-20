<template>

  <div class="wraps">
    <transition-group leave-active-class="animate__animated animate__hinge"
      enter-active-class="animate__animated animate__flip">
      <div class="items" v-for="item in list" :key="item">{{ item }}</div>
    </transition-group>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import 'animate.css';

const list = reactive<number[]>([1, 2, 3, 4, 5])

</script>

<style scoped lang='less'>

</style>