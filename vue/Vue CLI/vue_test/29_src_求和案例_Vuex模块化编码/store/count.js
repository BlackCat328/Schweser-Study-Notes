//求和功能相关的配置
export default {
    namespaced: true,
    actions: {
        incrementOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('INCREMENT', value)
            }
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit('INCREMENT', value)
            }, 1000)
        }
    },
    mutations: {
        INCREMENT(state, value) {
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '青中',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}
