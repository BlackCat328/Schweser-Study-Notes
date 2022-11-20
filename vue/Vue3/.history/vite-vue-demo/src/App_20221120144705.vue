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
import { ref, reactive, provide } from 'vue';
import provideAVue from "./components/provideA.vue";

</script>

<style scoped lang='less'>
.box {
  height: 50px;
  width: 50px;
  border: 1px solid #ccc;
}
</style>