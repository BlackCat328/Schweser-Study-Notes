<template>
  <div>
    <button>random</button>
    <transition-group class="wraps" tag="div" leave-active-class="animate__animated animate__hinge"
      enter-active-class="animate__animated animate__flip">
      <div class="items" v-for="item in list" :key="item.id">{{ item.number }}</div>
    </transition-group>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

let list = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => {
  return {
    id: index,
    number: (index % 9) + 1
  }
}))

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
  }
}
</style>