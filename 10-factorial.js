const { argv } = require("node:process");

let j = 1;

factorial = function(number) {
  for (i = number; i > 0; i--) {
    j = j * i;
  }
  console.log(j);
}

const arg = Number(argv[2])

if (!arg) {
  console.log(1);
} else factorial(arg);