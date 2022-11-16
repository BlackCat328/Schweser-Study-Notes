<template>
  <div class="container">
    <Category title="美食">
      <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.P77-DhII80EObyPtjWM0GgHaE6?w=269&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(item,index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'

export default {
  name: "app",
  components: {Category},
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>