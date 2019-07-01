var array = [1,2,3,4,5];

array.forEach(function(number, index){
  console.log(number-1);
});

var newArray = array.map(function(number, index){
  return number + 1;
})
//newArray -> [2,3,4,5,6];

array.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
})
// }, 10)
// returns 15, we can add a new starting point as above and it will return 25


var filteredArray = array.filter(function(number, index){
  return number < 3;
})
//filteredArray -> [1,2];

var found = array.find(function(element) {
  return element > 2;
});
// found -> 3;
