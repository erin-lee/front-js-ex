module.exports.sumNumbers = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString) {
  return inputString.toLowerCase().split(',');
};

module.exports.addIndex = function(arr) {
  newArr = []
  function logIndex(el, index, array) {
    newArr.push(index + " is " + el)
  };
  arr.forEach( logIndex );
  return newArr;
};
