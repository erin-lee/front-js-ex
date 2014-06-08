module.exports.copy = function(obj) {
  var newObj = Object.create(obj);
  return newObj;
};

module.exports.extend = function(dest, src) {
  for (var prop in src) {
    dest[prop] = src[prop];
  }
};

module.exports.hasElems = function(obj, arr) {
  var checkEl = function(el, index, arr) {
    return obj.hasOwnProperty(el);
  };

  return arr.every(checkEl);
};