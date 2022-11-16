<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
//引入混合
// import {mixin1,mixin2} from "../mixin";

export default {
  name: 'Student',
  data() {
    return {
      name: '青中',
      address: '青神',
    }
  },
  // mixins: [mixin1,mixin2]
}
</script>
