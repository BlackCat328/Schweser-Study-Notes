import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import CardVue from './components/Card.vue'

export const app = createApp(App)

//注册成全局组件

app.component('Card', CardVue)

app.mount('#app')
