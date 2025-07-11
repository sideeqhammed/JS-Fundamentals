const { argv } = require("process");

const add = (a, b) => {
  console.log(a + b);
}

const arg1 = Number(argv[2]);
const arg2 = Number(argv[3])

add(arg1, arg2);