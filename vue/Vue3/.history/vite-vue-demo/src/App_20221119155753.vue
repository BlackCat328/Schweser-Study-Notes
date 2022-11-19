<template>

  <div class="content">
    <AVue>
      <!-- <template v-slot:header> -->
      <template #header>
        <div>具名插槽 插入</div>
      </template>

      <!-- <template v-slot>
        <div>匿名插槽 插入</div>
      </template> -->

      <!-- <template v-slot="{ data }"> -->
      <template #default="{ data }">
        <!-- 作用域插槽 -->
        <div>{{ data.name }}---{{ data.age }}</div>
      </template>

      <!-- <template v-slot:footer> -->
      <template #footer>
        <div>具名插槽 插入</div>
      </template>
    </AVue>

    <h2>动态插槽</h2>

    <BVue>
      <template
    </BVue>

  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import AVue from './components/Dialog/A.vue';
import BVue from './components/Dialog/B.vue'

</script>

<style scoped lang="less">

</style>