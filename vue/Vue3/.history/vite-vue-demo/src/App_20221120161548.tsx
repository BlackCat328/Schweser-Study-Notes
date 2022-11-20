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
    v-show支持 v-if不支持 可以使用三元表达式
    ref template 自动解包 .value，tsx里面并不会，所以要加上 .value
*/
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const flag = ref(false)
        const data = [
            {
                name: '小魏1'
            },
            {
                name: '小魏'
            },
            {
                name: '小魏'
            },
        ]
        return () => (
            <>
                <div v-show={flag.value}>魏先生----23</div>
                {
                    flag.value ? <div>true</div> : <div>false</div>
                }
            </>
        )
    }
})

/* 
    1和3用得多一点
*/