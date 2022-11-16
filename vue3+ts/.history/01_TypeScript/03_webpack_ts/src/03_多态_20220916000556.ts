//多态:父类型的引用指向了子类型的对象,不同类型的对象针对相同的方法,产生了不同的行为
(() => {
    //定义一个父类
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        run(distance: number = 0) {
            console.log(`跑了${distance}米`, this.name)

        }
    }
    //定义一个子类
    class Dog extends Animal {
        constructor(name: string) {
            super(name)
        }
        run(distance: number = 5) {
            console.log(`跑了${distance}米`, this.name)
        }
    }
    //定义一个子类
    class Pig extends Animal {
        constructor(name: string) {
            super(name)
        }
        run(distance: number = 10) {
            console.log(`跑了${distance}米`, this.name)
        }
    }

    //实例化父类对象
    const ani: Animal = new Animal('动物')
    ani.run()
    //实例化子类对象
    const dog: Dog = new Dog('大黄')
    dog.run()
    //实例化子类对象
    const pig: Pig = new Pig('佩奇')
    pig.run()

    //父类和子类
})()