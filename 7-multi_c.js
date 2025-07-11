const {argv} = require("process");

const repeat = Number(argv[2]);

if (repeat) {
  for (i = 0; i < repeat; i++) {
    console.log("C is fun");
  }
} else console.log("Missing number of occurrences");