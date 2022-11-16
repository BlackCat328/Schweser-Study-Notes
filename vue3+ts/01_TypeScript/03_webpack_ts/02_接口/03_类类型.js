//类类型
(() => {
    /*
        类类型: 实现接口
        1. 一个类可以实现多个接口
        2. 一个接口可以继承多个接口
    */
    //定义一个类,这个类的类型就是上面定义的接口(实际上可以理解为,IFly接口约束了当前的这个Person类)
    class Person {
        fly() {
            console.log('牛逼');
        }
    }
    const person = new Person();
    person.fly();
    //定义一个类,这个类的类型就是IF1y和ISwim(当前这个类可以实现多个接口,一个类同时也可以被多个接口进行约束)
    class Person2 {
        fly() {
            console.log('起飞');
        }
        swim() {
            console.log('游泳');
        }
    }
    const person2 = new Person2();
    person2.fly();
    person2.swim();
    //定义一个类,直接实现IMyFlyAndSwim这个接口
    class Person3 {
        fly() {
            console.log('起飞');
        }
        swim() {
            console.log('游泳');
        }
    }
    const person3 = new Person3();
    person3.fly();
    person3.swim();
    //总结:接口和接口之间叫继承(使用的是extends关键字),类和接口之间叫实现(使用的是implements)
})();
