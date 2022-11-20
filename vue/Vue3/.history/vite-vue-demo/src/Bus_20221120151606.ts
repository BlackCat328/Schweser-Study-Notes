type BusClass = {
    emit: (name: string) => void
    on: (name: string, callback: Function) => void
}

type ParamsKey=string|number

class Bus implements BusClass {
    constructor() {

    }
    emit() {

    }
    on() {

    }
}