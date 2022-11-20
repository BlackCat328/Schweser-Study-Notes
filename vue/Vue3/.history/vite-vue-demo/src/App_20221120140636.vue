<template>

  <div class='content'>
    <div class="wraps">
      <!-- tag就是在div外面再包裹一层section， -->
      <transition-group tag="section">
        <div class="items" v-for="item in list" :key="item">{{ item }}</div>
      </transition-group>
    </div>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

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