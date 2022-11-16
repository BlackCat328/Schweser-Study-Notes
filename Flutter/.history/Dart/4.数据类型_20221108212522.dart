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

  //数值类型
  // 1. int 整型，浮点型不能赋值给整型，所以 int 必须是整型
  int num1 = 123;
  print(num1);
  // 2. double 浮点型，整型能赋值给浮点型，所以 double 既可以是整型也可以是浮点型
  double num2 = 23.4;
  print(num2);
  // 运算符
  var 
}
