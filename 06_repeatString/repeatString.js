const repeatString = function(string, num) {
  if (num < 0) return "ERROR"
  let repeatedString = ""
  for (let i = num; i > 0; i--) {
    repeatedString += string;
  }
  return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
