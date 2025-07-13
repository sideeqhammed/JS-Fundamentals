const { argv } = require("node:process");

const number = Number(argv[2]);



const factorial = function (number) {
  if (!number) return(1);

  return number * factorial(number - 1);
}

// const result = factorial(number);


result = factorial(number);
console.log(result);