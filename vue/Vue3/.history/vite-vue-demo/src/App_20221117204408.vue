<template>
  <div>
    {{ message.split('，').length }}
  </div>
</template>

<script setup lang="ts">
const message:string = "小明，小王"
</script>

<style>

</style>
