///example1
//old way
// function addNumbers(numbers) {
//   return numbers.reduce((sum, number) => {
//     return sum + number;
//   }, 0);
// }
//
// console.log("addNumbers", addNumbers([1, 2, 3, 4, 5]));

//example using rest.  Rest (the ... before numbers) wraps up all arguments
// fed to a function into an array
// function addNumbers(...numbers) {
//   return numbers.reduce((sum, number) => {
//     return sum + number;
//   }, 0);
// }
//
// console.log("addNumbers", addNumbers(1, 2, 3, 4, 5)); // note no more brackets

//example 2
// const defaultColors = ["red", "green"];
// const userFavoritecolors = ["orange", "yellow"];
//
// // old way:   defaultColors.concat(userFavoritecolors);
// [...defaultColors, ...userFavoritecolors];

///exercise 2////
//orig
// function join(array1, array2) {
//   return array1.concat(array2);
// }

//answer
//const join = (array1, array2) => [...array1, ...array2];

//exercise 3////
//orig
// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

//answer (I struggled with this one a bit)
// var array1 = [1, 2, 3];
// var a = "a";
// var b = "b";
// var c = "c";
// var d = "d";
// var e = "e";
// ****important part *****
//const unshift = (array1, ...array2) => [...array2, ...array1];
//
//answer = unshift(array1, a, b, c, d, e);
// console.log("answer", answer);
