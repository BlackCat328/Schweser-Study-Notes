type BusClass = {
    emit: (name: string) => void
    on: (name: string, callback: Function) => void
}

type ParamsKey = string | number | symbol

type List = {
    [key:ParamsKey]:Array<F>
}

class Bus implements BusClass {
    constructor() {

    }
    emit() {

    }
    on() {

    }
}