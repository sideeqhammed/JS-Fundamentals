const {argv} = require("process");

const repeat = Number(argv[2]);

let a = "";

if (repeat) {
  for (i = 0; i < repeat; i++) {
    a += "X";
  }
  for (j = 0; j < repeat; j++) {
    console.log(a);
  }
} else console.log("Missing size");