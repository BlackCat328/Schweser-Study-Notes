// 接口：一种能力，一种约束
(() => {
    //输出姓名
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    //定义一个对象
    const person = {
        firstName: '魏',
        lastName: '先生'
    };
    console.log(showFullName(person));
})();
