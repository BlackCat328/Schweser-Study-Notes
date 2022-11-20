type BusClass = {
    emit: (name: string) => void
    on: (name: string, callback: Function) => void
}

type paramsKey

class Bus implements BusClass {
    constructor() {

    }
    emit() {

    }
    on() {

    }
}