var num = prompt("Enter a number");
var sum = 0;

var digits = num.split("");

digits.forEach(digit => (sum += Number(digit)));

console.log(digits.join("+") + "=" + sum);
