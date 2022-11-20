<template>

  <div>
    <div class="">
      <transition-group>
        <div v-for="item in list" :key="item">{{ item }}</div>
      </transition-group>
    </div>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

const list = reactive<number[]>([1, 2, 3, 4, 5])

</script>

<style scoped lang='less'>

</style>