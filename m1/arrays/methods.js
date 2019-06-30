//--- REDUCE

var array = [1,2,3,4,5];
var initialValue = 0;

var newValue = array.reduce(function(accumulator, elementOfArray) {
  return accumulator + elementOfArray;
}, initialValue)

//--- Expected output newValue = 15;
