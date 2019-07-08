title = document.getElementById("titleLine");
viewLine1 = document.getElementById("view1");
viewLine2 = document.getElementById("view2");
viewLine3 = document.getElementById("view3");
viewLine4 = document.getElementById("view4");
titleLine.innerHTML = "ES6_Reduce.js";
// Reduce can be helpful with summing an array,

// ********Sum****
// var numbers = [10, 20, 30];
// var sum = 0;

//**for loop**
// for (i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// **stephen's way**
// sum = numbers.reduce(function(sum, number) {
//   return sum + number;
// }, 0);

// *fat arrow**
// sum = numbers.reduce((sum, number) => {
//   return sum + number;
// }, 0);

// console.log("sum", sum);

//*********primary colors*******
// var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];
//
// var arrColor = primaryColors.reduce(function(acc, primaryColor) {
//   acc.push(primaryColor.color);
//   return acc;
// }, []);
// console.log("arrColor", arrColor);

// **************whiteboard interview question, balanced parens problem "))(("**
// function balancedParens(string) {
//   return !string.split("").reduce(function(previous, char) {
//     if (previous < 0) {
//       return previous;
//     }
//     if (char === "(") {
//       return ++previous;
//     }
//     if (char === ")") {
//       return --previous;
//     }
//     return previous;
//   }, 0);
// }
//
// console.log("Is balanced? " + balancedParens("()"));

// //******exercise 1 ***********
// var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
//
// var totalDistance = trips.reduce((acc, trip) => {
//   return acc + trip.distance;
// }, 0);
// console.log("totalDistance", totalDistance);

//******exersis 2 *********
// var desks = [
//   { type: "sitting" },
//   { type: "standing" },
//   { type: "sitting" },
//   { type: "sitting" },
//   { type: "standing" }
// ];
//
// var deskTypes = desks.reduce(
//   function(acc, desk) {
//     if (desk.type === "sitting") {
//       ++acc.sitting;
//     }
//     if (desk.type === "standing") {
//       ++acc.standing;
//     }
//     return acc;
//   },
//   { sitting: 0, standing: 0 }
// );

//*********exersise 3**
// var numbers = [1, 1, 2, 3, 4, 4];
// var test = numbers.find(function(number) {
//   return (number = 4);
// });
// console.log("test", test);

//**first version**
// var uniqueArray = numbers.reduce((acc, number) => {
//   var currentNumber = number;
//   console.log("currentNumber", currentNumber);
//   if (
//     acc.find(number => {
//       console.log("number in if", number);
//       return number == currentNumber;
//     })
//   ) {
//     return acc;
//   } else {
//     acc.push(currentNumber);
//     console.log("acc: " + acc);
//   }
//   return acc;
// }, []);
// console.log("uniqueArray", uniqueArray);

//**version with ! in front of first if and re-written as function **
// function unique(array) {
//   return array.reduce((acc, number) => {
//     var currentNumber = number;
//     console.log("currentNumber", currentNumber);
//     if (
//       !acc.find(accNumber => {
//         return accNumber == currentNumber;
//       })
//     ) {
//       acc.push(currentNumber);
//       console.log("acc: " + acc);
//     }
//     return acc;
//   }, []);
// }
// console.log("function answer: " + unique(numbers));
