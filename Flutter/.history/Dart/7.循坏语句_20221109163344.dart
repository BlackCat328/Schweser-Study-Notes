void main() {
  //for
  var sum = 0;
  for (var i = 0; i <= 100; i++) {
    sum += i;
  }
  print(sum);

  //while
  var num = 0;
  var num1 = 0;
  while (num <= 10) {
    print(num);
    num++;
  }

  //do while
  do {
    sum += num1;
    num1++;
  } while (num <= 6);
}
