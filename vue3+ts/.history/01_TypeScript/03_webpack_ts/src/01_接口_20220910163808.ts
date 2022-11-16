//接口
//接口:是一种类型,是一种规范,是一个能力,是一种约束
(() => {
    // 需求: 创建人的对象, 需要对人的属性进行一定的约束
    // id是number类型, 必须有, 只读的
    // name是string类型, 必须有
    // age是number类型, 必须有
    // sex是string类型, 可以没有

    //定义一个接口类,该接口作为person对象的类型使用,限定或者是约束该对象中的属性数据
    interface IPerson {
        //id 只读,是number
        readonly id: number
        name: string
        age: number
        sex: string
    }

    //定义一个对象,该对象的类型就是我定义的接口IPerson
    const person: IPerson = {
        id: 1,
        name: '小甜甜',
        age: 18,
        sex: '女'
    }

    console.log(person)
    //id属性现在可读可写
    person.id = 100
    console.log(person)


})()