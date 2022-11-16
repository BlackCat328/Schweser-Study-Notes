<template>
  <div class="test">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点击number++</button>
    <button @click="sendStudentName">把学生名字给App</button>
    <button @click="unbind">解绑nb事件</button>
    <button @click="death">销毁当前Student组件实例(VC)</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '魏帅',
      age: '18',
      number: 0
    }
  },
  methods: {
    add(){
      console.log('add回调被调用了！！')
      this.number++
    },
    sendStudentName() {
      //触发Student组件实例身上的nb事件
      this.$emit('nb', this.name, 666, 888)
      // this.$emit('demo')
    },
    unbind() {
      this.$off('nb') //解绑一个自定义事件
      // this.$off(['nb','demo']) //解绑多个自定义事件
      // this.$off() //解绑所有自定义事件
    },
    death() {
      this.$destroy() //销毁了当前Student组件实例
    }
  }
}
</script>

<style scoped>
.test {
  background-color: orange;
}
</style>