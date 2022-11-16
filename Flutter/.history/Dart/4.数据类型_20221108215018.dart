/**
 *  Dart支持以下数据类型：
 *    
 *    常用的数据类型：
 *        Numbers(数值)：
 *            int
 *            double
 *        Strings(字符串)：
 *            String
 *        Booleans(布尔)：
 *            bool
 *        List(数组)：
 *            在 Dart 中，数组是列表对象，所以大多数人只是称它为列表
 *        Maps(字典)：
 *            通常来说，Map 是一个键值对相关的对象。键和值可以是任何类型的对象。
 */

void main() {
  print('--------------------------------string------------------------------');
  //字符串类型
  /**
   * 一组单引号或者一组双引号只能写一行字符串不能换行
   * 三组单引号或者三组双引号可以换行写字符串
   */
  var str1 = 'this is str1';
  String str2 = 'this is str2';
  print(str1);
  print(str2);

  String str3 = '''asdsadsadsa
  asdsadsad
  asdsadsad
  asdsadsad
  ''';
  print(str3);

  //字符串拼接
  String str4 = 'dart';
  String str5 = '666';
  print("$str4 $str5");
  print(str4 + str5);
  print(str4 + " " + str5);

  print('--------------------------------number------------------------------');

  //数值类型
  // 1. int 整型，浮点型不能赋值给整型，所以 int 必须是整型
  int num1 = 123;
  print(num1);
  // 2. double 浮点型，整型能赋值给浮点型，所以 double 既可以是整型也可以是浮点型
  double num2 = 23.4;
  print(num2);
  // 运算符 + - * /
  var num = num1 + num2;
  print(num);

  print('--------------------------------bool------------------------------');

  //布尔类型 true / false
  // 1. bool
  bool flag = true; // false
  print(flag);
  // 2. 条件判断语句
  var temp = false;
  if (temp) {
    print('真！');
  } else {
    print('假!');
  }

  print('--------------------------------list------------------------------');

  // 数组 / 集合类型
  // 1. 第一种定义List的方式
  var l1 = ['张三', 23, true];
  print(l1);
  print(l1.length);
  print(l1[2]);
  // 2. 第二种定义List的方式
  var l2 = <String>['刘备', '111'];
  // var l2 = <String>['刘备', 111]; //这是不行的，已经指定类型位String了
  var l3 = <int>[111, 2232];
  print(l2);
  print(l3);
  // 3. 第三种定义List的方式 增加数据
  var l4 = [];
  l4.add('李四');
  l4.add(24);
  l4.add(true);
  print(l4);
  print(l4.length);
  l1.add('55555');
  print(l1);
  //第四种定义List的方式
  // var l6 = new List(); // 老版本
  var l6 = List.filled(5, ''); // 创建一个固定长度的集合
  var l7 = List<String>.filled(5, '111'); // 指定类型,不指定也会类型推导
  print(l6);
  print(l7);
  l6[3] = '444';
  l6[1] = '张飞';
  print(l6);
  // l6.add('adssa'); // 报错，不能添加属性
  // l6.length = 0; // 也不能修改集合长度，其他方式创建的集合长度可以改变
  // print(l6);

  print('--------------------------------map------------------------------');

  //字典类型
  // 1. 第一种定义 Maps 的方式
  var person = {
    "name":"魏帅",
    ""
  }
}
