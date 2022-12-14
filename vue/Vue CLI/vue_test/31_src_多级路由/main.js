/*
* 该文件是整个项目的入口文件
* */
import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from "vue-router";
//引入路由器
import router from "./router"

Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)

new Vue({
    el: '#root',
    render: h => h(App),
    router: router,
})
