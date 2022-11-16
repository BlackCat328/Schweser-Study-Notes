// 修饰符(类中的成员的修饰符):主要是描述类中的成员的可访问性
// 类中的成员都有自己的默认的访问修饰符,public(公共的)
// private:私有的，外部无法访问，子类中也无法访问
// protected:受保护的，外部无法访问，子类中可以访问
(()=>{

    //定义一个类
    class Person {
        // public name:string
        // private name:string
        protected name:string
        constructor(name:string){
            this.name = name
        }
        eat(){
            console.log('66666666666',this.name);
        }
    }

    //定义一个子类
    class Student extends Person {
        constructor(name:string){
            super(name)
        }
        play(){
            console.log('77777777777',this.name);
            
        }
    }

    //实例化对象
    const per = new Person('888')
    //类的外部都可以访问类中的属性成员
    // console.log(per.name);
    per.eat()

    const stu = new Student('999')
    stu.play()
    // console.log(stu.name); //
    

})()