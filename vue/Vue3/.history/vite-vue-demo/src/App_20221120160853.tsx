// 1. 返回一个渲染函数
// export default function () {
//     return <div>魏先生</div>
// }

// 2. 引入 vue 中的 op defineComponent
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            name: '魏先生',
            age: 23
        }
    },

    render() {
        return (
            <div>{this.name}----{this.age}</div>
        )
    }
})