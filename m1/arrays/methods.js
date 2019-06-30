//--- REDUCE
var array = [1,2,3,4,5];
var initialValue = 0;

//--- with anonymous function
var newValue = array.reduce(function(accumulator, elementOfArray) {
  return accumulator + elementOfArray;
}, initialValue);

//--- with function declaration
function callback(accumulator, elementOfArray) {
  return accumulator + elementOfArray;
}
var newValue = array.reduce(callback);
//--- Expected output newValue = 15;


//--- MAP
var array = [1,2,3,4,5];

var arrayModified = array.map(function(elementOfArray, index, array) {
   return elementOfArray * 2;
});
//--- Expected output arrayModified = [2, 4, 6, 8, 10]
//--- It will always create a new array with same lenght as the original array

//--- FILTER
var temperatures = [10, 15, 25, 35, 40];

var filteredArray = temperatures.filter(function(elementOfArray, index, temperaturesArray) {
  return elementOfArray > 30;
});
//--- Expected output filteredArray = [35, 40];
//--- SPLICE
//--- REVERSE
//--- SORT
