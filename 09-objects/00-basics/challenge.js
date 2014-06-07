module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {};
  course.title = courseTitle;
  course.duration = courseDuration;
  course.students = courseStudents;
  return course;
};

module.exports.addProperty = function(obj, newProp, newValue) {
  if (obj.newProp) {
    return obj;
  } else {
    obj[newProp] = newValue;
    return obj;
  }
};

module.exports.formLetter = function(letter)  {
  var letterArr = []
  ,  greeting = ""
  ,  signature = ""

  greeting = "Hello " + letter.recipient + ",";
  signature = "Sincerely,\n" + letter.sender;
  letterArr = [ greeting, letter.msg, signature ];
  letterStr = letterArr.join("\n\n");

  return letterStr;
};

module.exports.canIGet = function(item, money) {
  var appleStuff = {
    "MacBook Air" : 999,
    "MacBook Pro" : 1299,
    "Mac Pro" : 2499,
    "Apple Sticker" : 1
  }
  return appleStuff[item] <= money;
};