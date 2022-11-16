//修饰符(类中的成员的修饰符):主要是描述类中的成员的可访问性
(()=>{

    //定义一个类
    class Person {
        name:string
        constructor(name:string){
            this.name = name
        }
        eat(){
            console.log('66666666666',this.name);
        }
    }

    //实例化对象
    const per = new Person('888')
    //类的外部都可以访问类中的属性成员
    console.log(per.name);
    per.eat()

})()