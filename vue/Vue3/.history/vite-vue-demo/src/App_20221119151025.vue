<template>
  <div style="display: flex;">
    <div clas="tab" v-for="item in data">
      <div>{{ item.name }}</div>
    </div>
  </div>

  <component :is="comId"></component>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import AVue from './components/A.vue';
import BVue from './components/B.vue';
import CVue from './components/C.vue';

const comId = ref(AVue)

const data = reactive([
  {
    name: 'A组件',
    com: AVue
  },
  {
    name: 'B组件',
    com: BVue
  },
  {
    name: 'C组件',
    com: CVue
  },
])

</script>

<style scoped lang="less">
.active{
  bac
}
.tab {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}
</style>