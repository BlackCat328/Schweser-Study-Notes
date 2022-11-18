

export const effect = (fn: Function) => {
    const   ss = function () {
        activeEffect = _effect
        fn()
    }

    _effect()
}