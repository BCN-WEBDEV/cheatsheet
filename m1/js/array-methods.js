var array = [1,2,3,4,5];

        // ----- For Each ----- //
array.forEach(function(number, index){
  console.log(number-1);
});

        // ----- Map ----- //
var newArray = array.map(function(number, index){
  return number + 1;
})
//newArray -> [2,3,4,5,6];

        // ----- Reduce ----- //
array.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
})
// }, 10)
// returns 15, we can add a new starting point as above and it will return 25

        // ----- Filter ----- //
var filteredArray = array.filter(function(number, index){
  return number < 3;
})
//filteredArray -> [1,2];

        // ----- Find ----- //
var found = array.find(function(element) {
  return element > 2;
});
// found -> 3;


//forEach - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//map - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//reduce - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

//filter - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//find - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
