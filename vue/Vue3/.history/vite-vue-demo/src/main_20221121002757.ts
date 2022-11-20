import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

type Filter = {
    format:<T>(str:)
}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $filters
    }
}

app.config.globalProperties.$filters = {
    format<T>(str: T): string {
        return `真·${str}`
    }
}

app.mount('#app')
