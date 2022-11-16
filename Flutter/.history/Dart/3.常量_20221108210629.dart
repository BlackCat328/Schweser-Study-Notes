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
  /**
   * final 可以开始不赋值 只能赋一次；
   * 而 final 不仅有 const 的编译时常量的特性，
   * 最重要的它是运行时常量，
   */
  final a = new DateTime.now();
  print(a);
  // const b = new DateTime.now();  // 错误
  // print(b);
}
