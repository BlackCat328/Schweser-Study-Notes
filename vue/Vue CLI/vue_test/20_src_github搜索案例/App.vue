<template>
    <div class="container">
      <Search></Search>
      <List></List>
    </div>
</template>

<script>
// import axios from "axios";
import Search from './components/Search'
import List from './components/List'

export default {
  name: "app",
  components:{List,Search}
}
</script>
