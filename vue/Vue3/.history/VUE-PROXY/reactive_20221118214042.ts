

export const reactive = <T extends object>(target: T) => {
    return new Proxy(target, {
        get(target, key, receiver) {
            let res = Reflec
        },
        set() {

        }
    })
}

reactive({})