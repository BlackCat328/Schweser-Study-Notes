<template>

  <div class="content">
    <Dialog>
      <!-- <template v-slot:header> -->
      <template #header>
        <div>具名插槽 插入</div>
      </template>

      <!-- <template v-slot>
        <div>匿名插槽 插入</div>
      </template> -->

      <!-- <template v-slot="{ data }"> -->
      <template #="{ data }">
        <!-- 作用域插槽 -->
        <div>{{ data.name }}---{{ data.age }}</div>
      </template>

      <!-- <template v-slot:footer> -->
      <template #footer>
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