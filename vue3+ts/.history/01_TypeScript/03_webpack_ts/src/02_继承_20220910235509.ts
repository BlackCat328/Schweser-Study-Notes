//继承：类与类之间的关系
//继承后类与类之间的叫法：
//A类继承了B这个类，那么此时A类叫子类，B类叫基类
//子类--------->派生类
//基类--------->超类（父类）
//一旦发生了继承的关系，就出现了父子类的关系(叫法)
(() => {
    //定义一个类
    class Person {
        //定义属性
        name: string
        age: number
        gender: string

        //定义构造函数
        constructor(name: string='小明', age: number=18, gender: string='男') {
            this.name = name
            this.age = age
            this.gender = gender
        }

        //定义实例方法
        sayHi(str: string) {
            console.log(`我是${this.name},${str}`);
        }
    }

    //定义一个类，继承自Person
    class Student extends Person {
        constructor(name: string, age: number, gender: string) {
            //调用的是父类中的构造函数，使用的是super
            super(name, age, gender)
        }

        //可以调用父类中的方法
        sayHi() {
            console.log('我是学生类中的sayHi方法')
            //调用父类中的sayHi方法
            super.sayHi('哈哈')
        }
    }

    //实例化Person
    const person = new Person('大明',88,'')
    //实例化Student
})()