const checkArgs = (arr) => {
  const actualArr = arr.length - 2;
  if (actualArr>= 2) {
    console.log("Arguments found")
  } else if (actualArr == 1) {
    console.log("Argument found");
  } else console.log("No argument");
}


const {argv}= require('node:process');

console.log(argv);

checkArgs(argv);

// argv.forEach(value => {
//   console.log(`${value}`)
// });


// checkArgs(arr);


// arr = ["cat"];

// checkArgs(arr);


// arr = [];

// checkArgs(arr);