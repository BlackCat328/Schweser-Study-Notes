<template>
  <div>
    <button @click="random">shuffle</button>
    <transition-group class="wraps" tag="div" move-class="move">
      <div class="items" v-for="item in list" :key="item.id">{{ item.number }}</div>
    </transition-group>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import _ from "lodash";

let list = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => {
  return {
    id: index,
    number: (index % 9) + 1
  }
}))

const random = () => {
  list.value = _.shuffle(list.value)
}

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

//
.move {
  transition: all 1s;
}
</style>