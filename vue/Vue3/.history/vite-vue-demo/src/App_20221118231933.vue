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
            <button>-</button>
            {{ item.num }}
            <button>-</button>
          </td>
          <td align="center">{{ item.price }}</td>
          <td align="center"><button>删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <td></td>
        <td></td>
        <td></td>
        <td align="center">总价：500</td>
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