<template>
  <div class="test">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'Student',
  data() {
    return {
      name: '青中',
      address: '青神',
    }
  },
  mounted() {
    this.pubId = pubsub.subscribe('hello', (msgName, data) => {
      console.log(msgName, data)
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped lang="less">
.test {
  background-color: deepskyblue;
}
</style>