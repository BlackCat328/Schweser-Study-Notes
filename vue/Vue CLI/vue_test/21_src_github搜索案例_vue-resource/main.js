/*
* 该文件是整个项目的入口文件
* */
import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

new Vue({
    el: '#root',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    }
})
