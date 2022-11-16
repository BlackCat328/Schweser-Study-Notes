<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="test">点击测试hello方法</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '魏帅',
      age: '18',
    }
  },
  methods:{
    test(){
      this.hello()
    }
  }
}
</script>
