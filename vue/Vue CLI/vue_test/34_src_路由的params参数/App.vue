<template>
  <div>
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- Vue中借助router-link实现路由切换 -->
          <router-link class="list-group-item" active-class="active" :to="{name:'ab'}">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 展示位置 -->
            <router-view></router-view>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'

export default {
  name: "app",
  components: {Banner}
}
</script>

<style>

</style>