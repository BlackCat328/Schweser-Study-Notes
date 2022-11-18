

export const reactive = <T extends object>(target: T) => {
    return new Proxy(target, {
        get(target,key,rece) {

        },
        set() {

        }
    })
}

reactive({})