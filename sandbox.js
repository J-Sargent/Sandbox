viewLine1 = document.getElementById("view1");
viewLine2 = document.getElementById("view2");
viewLine3 = document.getElementById("view3");

// const reject = (array, iteratorFunction) =>
//   array.filter(arr => !iteratorFunction(arr));
//
// var numbers = [10, 20, 30];
// var lessThanFifteen = reject(numbers, function(number) {
//   return number > 15;
// });
// var truthFilter = [];
// var falseFilter = [];

// function reject(array, iteratorFunction) {
//   return array.filter(function(arr) {
//     return !iteratorFunction(arr);
//   });
// }

// viewLine1.innerHTML = "truthFilter: " + truthFilter;
// viewLine2.innerHTML = "falseFilter:  " + falseFilter;
// viewLine3.innerHTML = "pluckFinal: ";

// var ladders = [{ id: 1, height: 20 }, { id: 3, height: 25 }];

//var ladder = ladders.find(ladder => ladder.height === 25);
//ladder; var propertyName;

// function findWhere(array, criteria) {
//   return array.find(function(arr) {
//     return arr[Object.keys(criteria)] == Object.values(criteria);
//   });
// }

//questions:
//why arr[Object.keys(criteria)] instead of arr.Object.keys(criteria)?
//why == instead of ===?
//what all can be used inside a helper? Example (note, this doesn't work):
// function findWhere(array, criteria) {
//   array.find(arr => {
//     propertyName = Object.keys(criteria)[0];
//     return arr[propertyName] == propertyName]value;
//   });
// }

// console.log(findWhere(ladders, { height: 25 }));
