

import { ca } from 'element-plus/es/locale'
import { onMounted } from 'vue'












type Options = {
    el: string
}

export default function (options: Options) {
    onMounted(() => {
        let img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
        console.log(img)
        img.onload = () => {
            base64(img)
        }
    })

    const base64 = (el: HTMLImageElement) => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas
    }
}