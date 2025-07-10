const { argv } = require('process');

if (Number(argv[2])) {
  console.log(Number(argv[2]))
} else {
  console.log("Not a Number")
}