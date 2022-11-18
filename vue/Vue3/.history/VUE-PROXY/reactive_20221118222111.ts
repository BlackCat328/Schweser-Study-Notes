import { track, trigger } from './effect'

export const reactive = <T extends object>(target: T) => {
    return new Proxy(target, {
        get(target, key, receiver) {
            let res = Reflect.get(target, key, receiver)
            tr
            return res
        },
        set(target, key, value, receiver) {
            let res = Reflect.set(target, key, value, receiver)
            return res
        }
    })
}

reactive({})