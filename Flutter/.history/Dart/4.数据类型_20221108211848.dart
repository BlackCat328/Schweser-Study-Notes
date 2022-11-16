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
   * 一组单引号只能写一行字符串不能换行
   * 三组
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
}
