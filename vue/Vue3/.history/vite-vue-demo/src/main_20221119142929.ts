import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import CardVue from './components/Card.vue'

export const app = createApp(App)

//注册成全局组件
/* 
    若想要批量注册全局组件，则可以循环去注册
*/
app.component('Card', CardVue)

app.mount('#app')
