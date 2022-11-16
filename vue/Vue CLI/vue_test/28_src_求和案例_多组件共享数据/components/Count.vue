<template>
  <div>
    <h1>当前求和为: {{ sum }}</h1>
    <h3>当前求和的10倍为: {{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h3 style="color:red">Person组件的总人数是：{{ personList.length }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      num: 1,
    }
  },
  computed: {
    //借助 mapState 生成计算属性，从state中读取数据（数组写法）
    ...mapState(['sum', 'school', 'subject', 'personList']),


    //借助 mapGetters 生成计算属性，从getters中读取数据（对象写法 && 数组写法）
    ...mapGetters(['bigSum']),
  },
  methods: {
    //借助 mapMutations 生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    ...mapMutations({increment: 'INCREMENT', decrement: 'DECREMENT'}),

    //借助 mapActions 生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
    ...mapActions({incrementOdd: 'incrementOdd', incrementWait: 'incrementWait'}),

  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>