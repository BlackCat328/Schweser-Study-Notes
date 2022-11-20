// 1. 返回一个渲染函数
// export default function () {
//     return <div>魏先生</div>
// }

// 2. 引入 vue 中的 optionsAPI
// import { defineComponent } from 'vue';
// export default defineComponent({
//     data() {
//         return {
//             name: '魏先生',
//             age: 23
//         }
//     },

//     render() {
//         return (
//             <div>{this.name}----{this.age}</div>
//         )
//     }
// })

// 3. setup 函数模式
/* 
    v-show支持
    ref template 自动解包 .value，tsx里面并不会
*/
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const flag = ref(false)
        return () => (
            <div v-show={flag}>魏先生----23</div>
        )
    }
})

/* 
    1和3用得多一点
*/