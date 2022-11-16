<template>
  <div class="test">
    <h2>学校名称：{{ name }}</h2>
    <h2 class="qwe">学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '青中',
      address: '青神',
    }
  }
}
</script>

<style scoped lang="less">
.test {
  background-color: deepskyblue;

  .qwe {
    font-size: 40px;
  }
}
</style>