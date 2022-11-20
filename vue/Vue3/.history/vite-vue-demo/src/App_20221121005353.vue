<template>

  <div>

  </div>

</template>

<script setup lang='ts'>

const ins = getCurrentInstance()
ins?.proxy?.$wsloading.show()

setTimeout(() => {
  
}, 3000);

</script>

<style scoped lang='less'>

</style>