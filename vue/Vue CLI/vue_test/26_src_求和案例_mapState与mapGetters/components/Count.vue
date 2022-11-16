<template>
  <div>
    <h1>当前求和为: {{ sum }}</h1>
    <h3>当前求和的10倍为: {{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      num: 1,
    }
  },
  computed: {
    //自己写计算属性
    /*sum() {
      return this.$store.state.sum
    },
    school() {
      return this.$store.state.school
    },
    subject() {
      return this.$store.state.subject
    },*/

    /*bigSum() {
      return this.$store.getters.bigSum
    },*/

    //借助 mapState 生成计算属性，从state中读取数据（对象写法）
    // ...mapState({sum:'sum',school:'school',subject:'subject'}),

    //借助 mapState 生成计算属性，从state中读取数据（数组写法）
    ...mapState(['sum', 'school', 'subject']),


    //借助 mapGetters 生成计算属性，从getters中读取数据（对象写法 && 数组写法）
    // ...mapGetters({bigSum:'bigSum'}),
    ...mapGetters(['bigSum']),
  },
  methods: {
    increment() {
      this.$store.commit('INCREMENT', this.num)
    },
    decrement() {
      this.$store.commit('DECREMENT', this.num)
    },
    incrementOdd() {
      this.$store.dispatch('incrementOdd', this.num)
    },
    incrementWait() {
      this.$store.dispatch('incrementWait', this.num)
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>