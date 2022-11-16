<template>
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name:'School',
  data() {
    return {
      schoolName: '青中',
      address: '青神'
    }
  }
}
</script>

<style scoped>
.demo {
  background-color: orange;
}
</style>