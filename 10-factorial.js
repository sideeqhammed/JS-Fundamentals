const { argv } = require("node:process");

let j = 1;

factorial = function(number) {
  for (i = number; i > 0; i--) {
    j = j * i;
  }
  console.log(j);
}

if (!argv[2]) {
  console.log(1);
} else factorial(Number(argv[2]));