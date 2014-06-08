module.exports.reversePlusOne = function(arg) {
  arg.reverse().unshift(1);
  return arg;
};

module.exports.plusesEverywhere = function(arg) {
  return arg.join('+');
};

module.exports.arrayQuantityPlusOne = function(arg) {
  return arg.unshift(1);
};