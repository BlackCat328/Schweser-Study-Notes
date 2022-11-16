<template>
  <div>
    <h2>学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '青中asd',
      address: '青神',
    }
  }
}
</script>
