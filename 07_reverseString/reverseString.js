const reverseString = function(string) {
  let stringArr = string.split("")
  let reverseArr = []
  for (let i = stringArr.length; i > 0; i--) {
    reverseArr.push(stringArr.at(i - 1))
  }
  return reverseArr.join("")
};
console.log(reverseString("Hello"))

// Do not edit below this line
module.exports = reverseString;
