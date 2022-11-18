<template>

  <div>
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>

</template>

<script setup lang='ts'>
import { reactive } from 'vue';

type Shop = {
  name: string,
  num: number,
  price: number
}

const data = reactive<Shop([
  {

  }
])

</script>

<style scoped>

</style>