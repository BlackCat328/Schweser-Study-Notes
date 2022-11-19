<template>
  <div class="parent">
    <h1>我是父级</h1>
    <Teleport>
      <A></A>
    </Teleport>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import A from './components/A.vue';

/* 
  Teleport:
    由于封装的 A 组件是使用定位 absolute 来做的
*/

</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}

.parent {
  height: 50vh;
  background: yellow;
}
</style>