import { createApp } from 'vue'
import App from './App.vue'
import esriConfig from '@arcgis/core/config'
import '@arcgis/core/assets/esri/themes/light/main.css' // 引入本地的arcgis api样式文件
esriConfig.assetsPath = './assets' // 设置资产路径

createApp(App).mount('#app')
