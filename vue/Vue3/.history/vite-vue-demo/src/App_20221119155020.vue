<template>

  <div class="content">
    <Dialog>
      <template v-slot:header>
        <div>具名插槽 插入</div>
      </template>
      <!-- <template v-slot>
        <div>匿名插槽 插入</div>
      </template> -->
      <template v-slot="{ data }">
        <div>{{ data }}</div>
      </template>
      <template v-slot:footer>
        <div>具名插槽 插入</div>
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