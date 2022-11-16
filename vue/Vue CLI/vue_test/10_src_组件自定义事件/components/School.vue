<template>
  <div class="test">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名字给App</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  props:['getSchoolName'],
  data() {
    return {
      name: '青中',
      address: '青神',
    }
  },
  methods: {
    sendSchoolName(){
      this.getSchoolName(this.name);
    }
  }
}
</script>

<style scoped lang="less">
.test {
  background-color: deepskyblue;
}
</style>