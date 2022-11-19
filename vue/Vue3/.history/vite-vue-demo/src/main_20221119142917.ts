import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import CardVue from './components/Card.vue'

export const app = createApp(App)

//注册成全局组件
/* 
    若想要批量注册quan'ju
*/
app.component('Card', CardVue)

app.mount('#app')
