var num1;
var num2;
var sum;

console.log("Enter two number until their sum is 0 or 100.");

while (true) {
  num1 = prompt("Enter the first number");
  num2 = prompt("Enter the second number");
  sum = Number(num1) + Number(num2);
  if (sum === 0 || sum === 100) break;
  console.log("Sum", sum);
}

console.log("Sum", sum, "...breaking loop!");
