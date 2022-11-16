//类类型
(() => {
    /* 
        类类型: 实现接口
        1. 一个类可以实现多个接口
        2. 一个接口可以继承多个接口
    */

    //定义一个接口
    interface IFly{
        //该方法没有任何实现
        fly()
    }

    //定义一个类,这个类的类型就是上面定义的接口(实际上可以理解为,IFly)
    class Person implements IFly{

    }
    const person = new Person()
})()