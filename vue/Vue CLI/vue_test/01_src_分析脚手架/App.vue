<template>
  <div>
    <img src="./assets/logo.png" alt="">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  name: "app",
  components:{
    School,
    Student
  }
}
</script>

<style scoped>

</style>