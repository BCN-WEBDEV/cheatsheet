//--- REDUCE ---// (it does not modify the original array)
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
//--- Expected output:
//    newValue = 15;


//--- MAP ---// (it does not modify the original array)
var array = [1,2,3,4,5];

var arrayModified = array.map(function(elementOfArray, index, array) {
   return elementOfArray * 2;
});
//--- Expected output:
//    arrayModified = [2, 4, 6, 8, 10]
//--- It will always create a new array with same lenght as the original array


//--- FILTER ---// (it does not modify the original array)
var temperatures = [10, 15, 25, 35, 40];

var filteredArray = temperatures.filter(function(elementOfArray, index, temperaturesArray) {
  return elementOfArray > 30;
});
//--- Expected output:
//    filteredArray = [35, 40];

//--- The filter method expectes a value of true or false to filter the array


//--- SPLICE ---// (it modifies the original array)
var array = ['apple', 'banana', 'kiwi', 'melon'];
var startingIndex = 2;
var numberOfElementToEliminate = 1;
var elementToAdd = 'avocado';
var eliminatedElemenets = array.splice(startingIndex, numberOfElementToEliminate, elementToAdd)
//--- Expected output:
//    eliminatedElemenets = ['kiwi'];
//    array = ['apple', 'banana', 'avocado', 'melon'];


//--- REVERSE ---// (it modifies the original array)
var array = ['apple', 'banana', 'kiwi', 'melon'];
array.reverse();
//--- Expected output:
//    array = ['melon', 'kiwi', 'banana', 'apple'];


//--- SORT ---// (it modifies the original array)
var array = [2, 3, 5, 9, 1, 10, 23];
array.sort();
//--- Expecte output:
//    array = [1, 10, 2, 23, 3, 5, 9];

function mySortFunction(a, b) {
  return a - b;
};
array.sort(mySortFUnction);
//--- Expectes output:
//    array = [1, 2, 3, 5, 9, 10, 23]

//--- Sort method expects negative, 0, or positive number to sort the array.
