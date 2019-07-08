title = document.getElementById("titleLine");
viewLine1 = document.getElementById("view1");
viewLine2 = document.getElementById("view2");
viewLine3 = document.getElementById("view3");
viewLine4 = document.getElementById("view4");
titleLine.innerHTML = "ES6_Every&Some.js";
//
//Every and some can be great for validating that all fields have something in them on a form.

// ******Computer RAM *******
// var computers = [
//   { name: "Apple", ram: 24 },
//   { name: "Compaq", ram: 4 },
//   { name: "Acer", ram: 32 }
// ];

// *** for version: ***
// for (var i = 0; i < computers.length; i++) {
//   var computer = computers[i];
//   if (computer.ram < 16) {
//     allComputersCanRunProgram = false;
//   } else {
//     onlySomeComputersCanRunProgram = true;
//   }
// }

// **stephen version***
// var allComputersCanRunProgram = computers.every(function(computer) {
//   return computer.ram > 16;
// });
//
// var onlySomeComputersCanRunProgram = computers.some(function(computer) {
//   return computer.ram > 16;
// });

// *** fat arrow version ***
// var allComputersCanRunProgram = computers.every(computer => computer.ram > 16);
// var onlySomeComputersCanRunProgram = computers.some(
//   computer => computer.ram > 16
// );
// console.log("allComputersCanRunProgram", allComputersCanRunProgram);
// console.log("onlySomeComputersCanRunProgram", onlySomeComputersCanRunProgram);

// ********Names, written before Stephen's solution********
// var names = ["Alexandria", "Matthew", "Joe"];
// var everyLongerThan4 = names.every(name => name.length > 4);
// console.log("everyLongerThan4 ", everyLongerThan4);
// var someLongerThan4 = names.some(name => name.length > 4);
// console.log("someLongerThan4", someLongerThan4);

// *******Validation *****
// function Field(value) {
//   this.value = value;
// }
// Field.prototype.validate = function() {
//   return this.value.length > 0;
// };
// var username = new Field("2cool");
// var password = new Field("bla123l");
// var birthdate = new Field("01101990");
// var fields = [username, password, birthdate];
//
// var formIsValid = fields.every(field => {
//   return field.validate();
// });
// console.log("formIsValid", formIsValid);

//***Exersies 1, subbited users******
// var users = [
//   { id: 21, hasSubmitted: true },
//   { id: 62, hasSubmitted: false },
//   { id: 4, hasSubmitted: true }
// ];
//
// var hasSubmitted = users.every(user => {
//   return user.hasSubmitted == true;
// });
// console.log("hasSubmitted", hasSubmitted);

//****exercise 2 in progress request *******
var requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" }
];

var inProgress = requests.some(request => request.status == "pending");
console.log("inProgress", inProgress);
