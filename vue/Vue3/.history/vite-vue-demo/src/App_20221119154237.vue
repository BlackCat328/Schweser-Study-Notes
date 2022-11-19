<template>

  <div class="content">
    <Dialog>
      <template v-slot:wsgg>
        <div>具名</div>
      </template>
      <template v-slot>
        <div>匿名插槽 插入</div>
      </template>
    </Dialog>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import Dialog from './components/Dialog/index.vue';

</script>

<style scoped lang="less">

</style>