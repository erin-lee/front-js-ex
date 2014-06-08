module.exports.getKeys = function (obj) {
  var keys = [];

  for (prop in obj) {
    keys.push(prop);
  };
  return keys;
};

module.exports.getValues = function(obj) {
  var values = [];

  for (prop in obj) {
    values.push(prop);
    values.push(obj[prop]);
  };
  return values;
};

module.exports.objectToArray = function(obj) {
  var strArr = [];

  for (prop in obj) {
    strArr.push(prop + ' is ' + obj[prop]);
  };
  return strArr;
};