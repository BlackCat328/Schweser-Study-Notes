/**
 * 定义常量
 */

void main() {
  //const定义
  const PI = 1233;
  // PI=213; 常量不可以修改
  print(PI);

  //final定义
  final NUM = 325324;
  // NUM = 35345; 常量不可以修改
  print(NUM);

  //const 与 final 的区别
  final a = new DateTime.now();
  print(a);
}
