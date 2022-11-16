<template>
  <div class="test">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生名字给School组件</button>
  </div>
</template>

<script>
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
      this.$bus.$emit('hello',this.name)
    }
  }
}
</script>

<style scoped>
.test {
  background-color: orange;
}
</style>