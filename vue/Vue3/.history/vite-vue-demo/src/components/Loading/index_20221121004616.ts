
import type { App, VNode } from 'vue'
import Loading from './index.vue'
import { createVNode, render } from 'vue'


export default {
    install(app: App) {
        const vNode: VNode = createVNode(Loading)
        render(vNode, document.body)
        vNode.component?.exposed
    }
}