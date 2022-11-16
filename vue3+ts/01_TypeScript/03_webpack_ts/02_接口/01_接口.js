//接口
//接口:是一种类型,是一种规范,是一个能力,是一种约束
(() => {
    // 需求: 创建人的对象, 需要对人的属性进行一定的约束
    // id是number类型, 必须有, 只读的
    // name是string类型, 必须有
    // age是number类型, 必须有
    // sex是string类型, 可以没有
    //定义一个对象,该对象的类型就是我定义的接口IPerson
    const person = {
        id: 1,
        name: '小甜甜',
        age: 18,
        // sex: '女'
    };
    console.log(person);
    //id属性现在可读可写,没加readonly
    // person.id = 100
    // console.log(person)
    /*
    在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
    接口: 是对象的状态(属性)和行为(方法)的抽象(描述)
    接口类型的对象
        多了或者少了属性是不允许的
        可选属性: ?
        只读属性: readonly
    */
})();
