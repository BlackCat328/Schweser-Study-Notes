void main() {
  //for
  var sum = 0;
  for (var i = 0; i <= 100; i++) {
    sum += i;
  }
  print(sum);

  //while
  var num = 0;
  while (num <= 10) {
    print(num);
    num++;
  }

  //do while
  var num1 = 0;
  var sum1 = 0;
  do {
    sum1 += num1;
    num1++;
  } while (num1 <= 100);
  print(sum1)
}
