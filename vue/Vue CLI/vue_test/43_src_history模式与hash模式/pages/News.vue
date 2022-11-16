<template>
  <ul>
    <li :style="{opacity}">欢迎学习vue！！！</li>
    <li>
      &nbsp;news001
      <input type="text">
    </li>
    <li>
      &nbsp;news002
      <input type="text">
    </li>
    <li>
      &nbsp;news003
      <input type="text">
    </li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      a: false,
      opacity: 1
    }
  },
  /* mounted() {
     this.timer = setTimeout(() => {
       this.opacity -= 0.01
       if (this.opacity <= 0) this.opacity = 1
     })
   },
   beforeDestroy() {
     clearInterval(this.timer)
   }*/

  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    })
  },
  deactivated() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>