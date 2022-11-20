

import { onMounted } from 'vue'












type Options = {
    el: string
}

export default function (options: Options) {
    onMounted(() => {
        let img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
        console.log(img)
    })
}