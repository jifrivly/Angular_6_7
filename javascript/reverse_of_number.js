var num = 5021,
  reverse = 0,
  remainder = 0;

while (num > 0) {
  remainder = num % 10;
  reverse = reverse*10 + remainder;
  num = parseInt(num / 10);
}
console.log("Reverse : " + reverse);
