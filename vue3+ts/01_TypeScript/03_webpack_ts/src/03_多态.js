//多态:父类型的引用指向了子类型的对象,不同类型的对象针对相同的方法,产生了不同的行为
(() => {
    //定义一个父类
    class Animal {
        constructor(name) {
            this.name = name;
        }
        run(distance = 0) {
            console.log(`跑了${distance}米`, this.name);
        }
    }
    //定义一个子类
    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
        run(distance = 5) {
            console.log(`跑了${distance}米`, this.name);
        }
    }
    //定义一个子类
    class Pig extends Animal {
        constructor(name) {
            super(name);
        }
        run(distance = 10) {
            console.log(`跑了${distance}米`, this.name);
        }
    }
    //实例化父类对象
    const ani = new Animal('动物');
    ani.run();
    //实例化子类对象
    const dog = new Dog('大黄');
    dog.run();
    //实例化子类对象
    const pig = new Pig('佩奇');
    pig.run();
    console.log('=================================================');
    //父类和子类的关系：父子关系，此时，父类类型创建子类的对象
    const dog1 = new Dog('小黄');
    dog1.run();
    const pig1 = new Dog('小猪');
    pig1.run();
    console.log('=================================================');
    //该函数需要的参数是Animal类型的
    function showRun(ani) {
        ani.run();
    }
    showRun(dog1);
    showRun(pig1);
})();
