//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'ab',
            path: '/about',
            component: About,
            meta: {title: '关于'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {title: '主页', isAuth: true},
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title: '新闻'},
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                            meta: {title: '消息内容'},
                            //props的第三种写法，值为函数
                            /*props($route) {
                                return {id:$route.query.id, title:$route.query.title}
                            }*/
                            props({query: {id, title}}) {
                                return {id, title}
                            } //同上
                        }
                    ]
                }
            ]
        }
    ]
})

router.afterEach((to, from) => {
    document.title = to.meta.title || '管理系统'
})

export default router
