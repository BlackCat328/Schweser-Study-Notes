type BusClass = {
    emit: (name: string) => void
    on: (name: string, callback: Function) => void
}

type ParamsKey = string | number | symbol

type List = {
    [key: ParamsKey]: Array<Function>
}

class Bus implements BusClass {
    list: List
    constructor() {
        this.list = {}
    }
    emit() {

    }
    on(name:string,callback:Function) {
        
    }
}