<template>
  <div class="wraps">
    <transition-group leave-active-class="animate__animated animate__hinge"
      enter-active-class="animate__animated animate__flip">
      <div class="items" v-for="item in list" :key="item">{{ item }}</div>
    </transition-group>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

let list = ref(Array.apply(null, { length: 81 } as number[]).map((_,index)=>{
  return {
    id:index,
    number:()
  }
}))

</script>

<style scoped lang='less'>

</style>