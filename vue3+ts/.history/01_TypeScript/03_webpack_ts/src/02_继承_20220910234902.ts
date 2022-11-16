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
        constructor(name: string, age: number, gender: string) {
            this.name = name
            this.age = age
            this.gender = gender
        }

        //定义实例方法
        
    }
})()