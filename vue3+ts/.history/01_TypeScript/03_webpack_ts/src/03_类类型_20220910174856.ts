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

    //定义一个类,这个类的类型就是上面定义的接口(实际上可以理解为,IFly接口约束了当前的这个Person类)
    class Person implements IFly{
        fly() {
            console.log('牛逼');
            
        }
    }
    const person = new Person()
    person.fly()

    //定义一个接口
    interface ISwim{
        swim()
    }

    //定义一个类,这个类的类型就是IF1y和ISwim(当前这个类可以实现多个接口,一个类同时也可以被多个接口进行约束)
    class Person2 implements IFly,ISwim{
        fly() {
            console.log('起飞');
        }
        swim() {
            console.log('游泳');
        }
    }
    const person2 = new Person2()
    person2.fly()
    person2.swim()

    //总结:类可以通过接口的方式,来定义当前这个类的类型
    //类可以实现一个接口,类也可以实现多个接口,要注意,接口中的内容都要真正的实现
    
    //接口可以继承其他的多个接口
    interface IMyFlyAndSwim extends IFly,ISwim{}

    //定义一个类,直接实现IMyFlyAndSwim这个接口
    

})()