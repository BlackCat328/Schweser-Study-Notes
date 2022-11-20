import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import Loading from './components/Loading'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(Loading)

app.mount('#app')

type Lod = {
    show: () => void,
    hide: () => void
}

//
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $wsloading: Lod
    }
}
