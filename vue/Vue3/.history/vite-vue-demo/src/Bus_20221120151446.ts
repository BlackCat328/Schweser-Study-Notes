type BusClass = {
    emit: (name: string) => void
    on: (name: string, callback: Function) => void
}

c