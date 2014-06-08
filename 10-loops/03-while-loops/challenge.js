module.exports.stream = function(condition, action) {
  while (condition) {
    return action;
  };
};

module.exports.sumNumbers = function(arr) {
  var index = 0
  , sum = 0;
  while (index < arr.length) {
    sum += arr[index];
    index++;
  }
  return sum;
};

