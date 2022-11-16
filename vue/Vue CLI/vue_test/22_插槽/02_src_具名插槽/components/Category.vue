<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!--定义一个插槽-->
    <slot name="center">默认值</slot>
    <slot name="footer">默认值</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ['title'],
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  background-color: orange;
}
</style>