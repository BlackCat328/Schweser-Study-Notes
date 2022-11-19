<template>

  <el-button type="primary" @click="onChange">切换组件</el-button>
  <div>
    <div @click="switchCom(item, index)" :class="[active == index ? 'active' : '']" class="tab"
      v-for="(item, index) in data">
      <div>{{ item.name }}</div>
    </div>
  </div>
  

</template>

<script setup lang='ts'>
import { shallowRef, reactive, markRaw } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';

const comId = shallowRef(A)

const comList = reactive([
  {
    name: 'A',
    com: markRaw(A)
  },
  {
    name: 'B',
    com: markRaw(B)
  }
])

const onChange = () => {

}

</script>

<style scoped lang='less'>

</style>