<template>
  <div>
    <Count></Count>
    <br>
    <Person></Person>
  </div>
</template>

<script>
import Count from './components/Count'
import Person from './components/Person'

export default {
  name: "app",
  components: {Count,Person}
}
</script>

<style>

</style>