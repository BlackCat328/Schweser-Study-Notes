<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
  name: "app",
  components: {
    Student,
    School
  },
  data() {
    return {
      msg: "欢迎哦哦哦",
    }
  }
}
</script>

<style scoped>
.app {
  background-color: #626161;
}
</style>