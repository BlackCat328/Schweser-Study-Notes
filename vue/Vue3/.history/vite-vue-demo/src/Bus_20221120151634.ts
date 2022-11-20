type BusClass = {
    emit: (name: string) => void
    on: (name: string, callback: Function) => void
}

type ParamsKey = string | number | symbol

type List = {
    [key:P]
}

class Bus implements BusClass {
    constructor() {

    }
    emit() {

    }
    on() {

    }
}