module.exports.formLetter = function(firstName, senderName, message) {
  var greeting = "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
  return greeting;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var first = bigString.substring(startA, endA);
  var second = bigString.substring(startB, endB);

  return first + second;
};

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
  var firstIndex = text.indexOf(searchString);
  var secondIndex = text.lastIndexOf(searchString);
  return text.substring( firstIndex + searchString.length , secondIndex );
};
