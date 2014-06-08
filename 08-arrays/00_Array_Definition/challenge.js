module.exports.newArray = function(arg1, arg2, arg3, arg4) {
 return new Array(arg1, arg2, arg3, arg4);
};

module.exports.firstAndLast = function(arg1) {
  return new Array(arg1[0], arg1[arg1.length -1]);
};