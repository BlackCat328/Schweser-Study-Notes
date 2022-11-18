
let activeEffect;
export const effect = (fn: Function) => {
    const _effect = function () {
        activeEffect = _effect
        fn()
    }

    _effect()
}

const targetMap = new WeakMap()
export const track = (target, key) => {
    let depsMap = targetMap.get()
}