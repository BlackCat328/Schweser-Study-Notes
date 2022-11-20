import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'





imort * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
