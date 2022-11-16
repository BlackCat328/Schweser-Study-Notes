//基础类型
(() => {
    //let 变量名：数据类型 = 值
    //布尔类型------>boolean
    let isDone: boolean = false;
    console.log(isDone)

    //数字类型------>number
    let a1: number = 10 // 十进制
    let a2: number = 0b1010  // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制
    console.log(a1)
    console.log(a2)
    console.log(a3)
    console.log(a4)

    //字符串类型------>string
    let name: string = 'tom' // name = 12 // error
    let age: number = 12
    const info = `My name is ${name}, I am ${age} years old!` //字符串与数字拼接
    console.log(info)


    /*
    *总结：ts中变量一开始是什么类型，那么后面赋值的时候，
    * 只能用这个类型的数据，是不允许用其他类型的数据赋值
    * 给当前的这个变量中。
    *
    * 如：let str:string = '魏先生'
    *    str = 100 (不允许)
    * */
    console.log('----------------------------------------------------------------')

    //undefined 和 null
    let u: undefined = undefined
    let n: null = null
    console.log(u)
    console.log(n)
    /*
    undefined和null都可以作为其它类型的子类型，
    把undefined和null赋值给其它类型的变量，如number类型的变量
    */
    let num: number = null //undefined
    console.log(num)

    //数组类型
    //数组定义方式1
    //let 变量名：数据类型[] = [值，值，值...]
    let arr1: number[] = [10, 20, 30, 40, 50]
    console.log(arr1)
    //定义方式2：泛型的写法
    //let 变量名：Array<数据类型> = [值，值，值...]
    let arr2: Array<number> = [100, 200, 300]
    console.log(arr2)
    /*
    * 数组定义后，里面的数据的类型必须和定义数组的时候的类型是一致的，否则报错
    * */

    //元组类型:在定义数组的时候，类型和数据的个数一开始就限定了
    let t1: [string, number, boolean] = ['hello', 10.6465, true] // OK
    console.log(t1)
    //t1 = [10, 'hello'] // Error
    console.log(t1[0].substring(1))
    console.log(t1[1].toFixed(2))
    /*
    * 元组类型在使用的时候，数据类型的位置和数据的个数应该和定义元组的时候的
    * 数据类型及位置应该是一致的
    * */

    console.log('============================================================================');
    //枚举
    enum Color {
        Red,
        Green,
        Blue
    }

    // 枚举数值默认从0开始依次递增
    // 根据特定的名称得到对应的枚举数值
    let myColor: Color = Color.Green  // 0
    console.log(myColor, Color.Red, Color.Blue)
    console.log(Color[3]);
    //枚举中的元素可以是中文的数据值，不推荐
    //   enum Gender {
    //     女,
    //     男
    //   }
    //   console.log(Gender.男)

    console.log('====================================================');

    //any类型
    //   let str:any = 100
    //   str = '年少'
    //   console.log(str);
    //当一个数组中要存储多个数据，个数不确定，类型不确定，此时也可以用any类型来定义数组
    let arr: any[] = [100, '年少', true]
    console.log(arr);
    //可以调用数组方法
    console.log(arr[1].split(''));
    //但是这种情况不会有错误的提示信息
    // console.log(arr[0].split(''));

    //void类型,在函数声明的时候,小括号后面使用:void,代表的是该函数没有任何的返回值
    function showMsg(): void {
        console.log('年少')
        // return undefined
        return null
    }
    console.log(showMsg());
    //定义void类型的变量,可以接受一个undefined的值，意义不大
    let vd: void = undefined
    console.log(vd);

    console.log('======================================================================');

    //object
    //定义一个函数，参数是object类型，返回值也是object类型
    function 
    

})()