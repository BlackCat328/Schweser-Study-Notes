/*
* 该文件是整个项目的入口文件
* */
import Vue from 'vue'
import App from './App.vue'
import {mixin1,mixin2} from "./mixin";
Vue.config.productionTip = false
Vue.mixin(mixin1)
Vue.mixin(mixin2)

new Vue({
    el: '#root',
    render: h => h(App),
})
