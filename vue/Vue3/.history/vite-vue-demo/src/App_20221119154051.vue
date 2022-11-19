<template>

  <div class="content">
    <Dialog>
      <template v-slot>
        <div>我被插入了中间</div>
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