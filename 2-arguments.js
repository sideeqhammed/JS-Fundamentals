checkArgs = (arr) => {
  if (arr.length >= 2) {
  console.log("Arguments found")
} else if (arr.length == 1) {
  console.log("Argument found");
} else console.log("No argument");
}


let arr = ["cat", "dog", "sheep"];

checkArgs(arr);


arr = ["cat"];

checkArgs(arr);


arr = [];

checkArgs(arr);