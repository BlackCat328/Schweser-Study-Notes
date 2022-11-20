
import type { App, vNode } from 'vue'
import Loading from './index.vue'
import { createVNode } from 'vue'


export default {
    install(app: App) {
        console.log(app)
        const vNode: vNode = createVNode(Loading)
        console.log('vNode'
    }
}