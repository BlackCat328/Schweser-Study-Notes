type BusClass = {
    emit: (name: string) => void
    on:(name:string,call)
}