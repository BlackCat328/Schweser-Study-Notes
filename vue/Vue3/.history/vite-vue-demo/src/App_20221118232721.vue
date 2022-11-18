<template>

  <div>
    <table border style="width: 800px;">
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td align="center">{{ item.name }}</td>
          <td align="center">
            <button @click="addAndSub(item, false)">-</button>
            {{ item.num }}
            <button @click="addAndSub(item, true)">+</button>
          </td>
          <td align="center">{{ item.num * item.price }}</td>
          <td align="center"><button @click="del(index)">删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <td></td>
        <td></td>
        <td></td>
        <td align="center">总价：{{ total }}</td>
      </tfoot>
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
const $total = ref
const data = reactive<Shop[]>([
  {
    name: '裤子',
    num: 1,
    price: 100
  },
  {
    name: '衣服',
    num: 1,
    price: 200
  },
  {
    name: '帽子',
    num: 1,
    price: 50
  },
])

const addAndSub = (item: Shop, type: boolean): void => {
  if (item.num > 1 && !type) {
    item.num--
  }
  if (item.num < 99 && type) {
    item.num++
  }
}

const del = (index: number) => {
  data.splice(index, 1)
}

const total = () => {
  data.reduce((prev, next) => {
    return prev + (next.num * next.price)
  }, 0)
}

</script>

<style scoped>

</style>