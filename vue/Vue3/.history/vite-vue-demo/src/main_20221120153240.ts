import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import './assets/css/reset.css'

const Mitt = mitt()



import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

declare module 'vue' {
    export interface Com
}

app.config.globalProperties.$Bus = Mitt

app.mount('#app')
