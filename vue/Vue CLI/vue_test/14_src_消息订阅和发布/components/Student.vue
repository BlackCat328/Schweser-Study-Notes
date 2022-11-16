<template>
  <div class="test">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生名字给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'Student',
  data() {
    return {
      name: '魏帅',
      age: '18'
    }
  },
  methods:{
    sendStudentName(){
      pubsub.publish('hello',this.name)
    }
  }
}
</script>

<style scoped>
.test {
  background-color: orange;
}
</style>