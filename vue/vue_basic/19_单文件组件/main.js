import App from '../../Vue CLI/vue_test/src/App'
Vue.config.productionTip = false //阻止vue启动提示
new Vue({
    template:`<div><App></App></div>`,
    el:'#root',
    components:{
        App
    }
})