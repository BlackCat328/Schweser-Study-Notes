<template>

  <div class='content'>
    <button>push</button>
    <button>pop</button>
    <div class="wraps">
      <!-- tag就是在div外面再包裹一层section，其余的跟transition一样 -->
      <transition-group tag="section" leave-active-class="animate__animated animate__flip"
        enter-active-class="animate__animated animate__flip">
        <div class="items" v-for="item in list" :key="item">{{ item }}</div>
      </transition-group>
    </div>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import 'animate.css';

const list = reactive<number[]>([1, 2, 3, 4, 5])

</script>

<style scoped lang='less'>
.wraps {
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  border: 1px solid #ccc;

  .items {
    margin: 10px;
  }
}
</style>