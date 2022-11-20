
import type { App, VNode } from 'vue'
import Loading from './index.vue'
import { createVNode, render } from 'vue'


export default {
    install(app: App) {
        console.log(app)
        const vNode: VNode = createVNode(Loading)
        console.log(vNode)
        render(vNode,document.)
    }
}