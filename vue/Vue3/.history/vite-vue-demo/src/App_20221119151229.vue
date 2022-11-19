<template>
  <div style="display: flex;">
    <div @click="switchCom(item, index)" :class="[active == index ? 'active' : '']" clas="tab" v-for="(item,index) in data">
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

const active = ref(0)

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
.active {
  background: skyblue;
}

.tab {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}
</style>