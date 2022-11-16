<template>
  <div>
    <School></School>
    <hr>
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
  }
}
</script>

<style scoped>

</style>