<template>
  <div class="test">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
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
  },
  mounted() {
    this.$bus.$on('hello', (data) => {
      console.log('School组件收到了数据', data)
    })
    this.$bus.$on('hello', (data) => {
      console.log('School组件收到了数据', data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  }
}
</script>

<style scoped lang="less">
.test {
  background-color: deepskyblue;
}
</style>