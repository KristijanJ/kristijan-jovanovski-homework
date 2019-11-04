var n = prompt("How many stars do you want printed out in a sequence?");
var array = [];

for (let i = 0; i < n; i++) {
  array.push("*");
  console.log(array.join(" "));
}
