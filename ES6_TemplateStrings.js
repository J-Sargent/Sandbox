//ES 5 version
// function getMessage() {
//   const year = new Date().getFullYear();
//   return "The year is " + year;
// }
// console.log(getMessage());

// function getMessage() {
//   //const year = new Date().getFullYear();
//   //return `The year is ${year}`; ---- using a variable name
//   return `The year is ${new Date().getFullYear()}`; //----including the whole code.
// }

//*******template strings with lots of variables in a string*****
// let device_id = 123;
// let guid = "who knows";
// let username = "Sarah Silverman";
// data = `device_id: ${device_id}, guid: ${guid}, username: ${username}`;
// console.log("data", data);

// **exercise 1** starting with:
// function doubleMessage(number) {
//   return `Your number doubled is ${2 * number}`;
// }

// refactored
// let number = 3;
// function doubleMessage(number) {
//   return `Your number doubled is ${2 * number}`;
// }
// console.log(doubleMessage(number));

//**exercise 2** starting with:
// function fullName(firstName, lastName) {
//   return firstName + lastName;
// }
//expected result: FirstName lastName

//refactored
// function fullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// console.log(fullName("Jessica", "Sargent"));
