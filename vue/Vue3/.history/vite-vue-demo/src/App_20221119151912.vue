<template>
  <div style="display: flex;">
    <div @click="switchCom(item, index)" :class="[active == index ? 'active' : '']" clas="tab"
      v-for="(item,index) in data">
      <div>{{ item.name }}</div>
    </div>
  </div>

  <component :is="comId"></component>

</template>

<script setup lang='ts'>
import { ref, reactive, markRaw, shallowRef } from 'vue';
// import AVue from './components/A.vue';
// import BVue from './components/B.vue';
// import CVue from './components/C.vue';

/* 
  markRaw 会跳过所包裹的属性，不会做数据代理，节约性能
*/

const comId = shallowRef('AVue')

const active = ref(0)

// const data = reactive([
//   {
//     name: 'A组件',
//     com: markRaw(AVue)
//   },
//   {
//     name: 'B组件',
//     com: markRaw(BVue)
//   },
//   {
//     name: 'C组件',
//     com: markRaw(CVue)
//   },
// ])

// di'er
const data = reactive([
  {
    name: 'A组件',
    com: 'AVue'
  },
  {
    name: 'B组件',
    com: 'BVue'
  },
  {
    name: 'C组件',
    com: 'CVue'
  },
])

const switchCom = (item, index) => {
  comId.value = item.com
  active.value = index
}

</script>

<script lang="ts">
import AVue from './components/A.vue';
import BVue from './components/B.vue';
import CVue from './components/C.vue';
export default {
  components: {
    AVue,
    BVue,
    CVue
  }
}
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