/**
 *  Dart类型判断
 *    通过 is 关键词来判断类型
 */

void main() {
  var str = 'drsar';
  if (str is String) {
    print("是String类型");
  } else if (str is int) {
    print("是int类型");
  }
}
