const reverseString = function (string) {
  // Old Solution
  // let stringArr = string.split("")
  // let reverseArr = []
  // for (let i = stringArr.length; i > 0; i--) {
  //   reverseArr.push(stringArr.at(i - 1))
  // }
  // return reverseArr.join("")
  return string.split("").reverse().join("");
};
console.log(reverseString("Hello"));

// Do not edit below this line
module.exports = reverseString;
