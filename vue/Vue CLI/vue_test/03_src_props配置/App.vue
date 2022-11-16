<template>
  <div>
    <Student name="魏帅" sex="男" :age="17"></Student>
    <Student name="却二毛" sex="女" :age="16"></Student>
  </div>
</template>

<script>
import Student from './components/Student'

export default {
  name: "app",
  components: {
    Student
  }
}
</script>

<style scoped>

</style>