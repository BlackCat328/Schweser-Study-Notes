// 接口：一种能力，一种约束
(() => {
    //定义一个接口
    interface IPerson {
        firstName: string;
        lastName: string;
    }

    //输出姓名
    function showFullName(person: IPerson) {
        return person.firstName + '_' + person.lastName
    }

    //定义一个对象
    const person = {
      firstName: '魏',
      lastName: '先生'
    }

    console.log(showFullName(person))
})()