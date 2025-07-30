const repeatString = function(string, num) {
  let repeatedString = ""
  if (num >= 0) {
    for (let i = num; i > 0; i--) {
      repeatedString += string;
    }
  } else {
    repeatedString = "ERROR"
  }
  return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
