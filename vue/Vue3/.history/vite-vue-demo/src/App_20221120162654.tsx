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
    map 代替 v-for
    {} 代替 v-bind
    props emit
*/
import { defineComponent, ref } from 'vue';

interface Props {
    name?: String
}

export default defineComponent({
    props: {
        name: String
    },
    emits: ['wsgg'],
    setup(props: Props, { emit }) {
        const flag = ref(false)
        const data = [
            {
                name: '小魏1'
            },
            {
                name: '小魏2'
            },
            {
                name: '小魏3'
            },
        ]

        const fn = (item: any) => {
            console.log('触发了', item)

            emit('wsgg',)
        }

        return () => (
            <>
                <div v-show={flag.value}>魏先生----23</div>
                {/* 三元表达式 */}
                {
                    flag.value ? <div>true</div> : <div>false</div>
                }
                {/* 循环遍历 */}
                {
                    data.map(v => {
                        return (
                            <div onClick={() => fn(v)}>{v.name}</div>
                        )
                    })
                }
                {/* props */}
                <div>props:{props.name}</div>
            </>
        )
    }
})

/* 
    1和3用得多一点
*/