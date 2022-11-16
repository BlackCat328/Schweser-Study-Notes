<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",

  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem('school') === 'qingzhong') next()
      else alert('学校名不对，无法访问！！！')
    } else {
      next()
    }
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    next()
  }
}
</script>

<style scoped>

</style>