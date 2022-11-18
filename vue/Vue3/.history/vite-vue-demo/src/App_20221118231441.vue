<template>

  <div>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th></th>
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

const data = reactive<Shop[]>([
  {
    name: '裤子',
    num: 1,
    price: 100
  },
  {
    name: '衣服',
    num: 2,
    price: 200
  },
  {
    name: '帽子',
    num: 5,
    price: 50
  },
])

</script>

<style scoped>

</style>