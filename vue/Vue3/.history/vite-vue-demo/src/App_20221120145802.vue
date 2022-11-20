<template>
  <h1>App.vue（爷爷级别）</h1>
  <label>
    <input type="radio" name="color" value="red" v-model="colorVal">
    红色
  </label>

  <label>
    <input type="radio" name="color" value="pink" v-model="colorVal">
    粉色
  </label>

  <label>
    <input type="radio" name="color" value="yellow" v-model="colorVal">
    黄色
  </label>

  <div class="box">

  </div>

  <hr>

  <provideAVue></provideAVue>

</template>

<script setup lang='ts'>
import { ref, reactive, provide, readonly } from 'vue';
import provideAVue from "./components/provideA.vue";

const colorVal = ref<string>('red')

// 这种方式注入的值是可以被子组件给更改的
// 要是不想要被更改
provide('color', colorVal)

</script>

<style scoped lang='less'>
.box {
  height: 50px;
  width: 50px;
  border: 1px solid #ccc;
  background: v-bind(colorVal);
}
</style>