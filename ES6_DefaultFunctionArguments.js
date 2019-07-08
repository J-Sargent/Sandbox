//********exercise 1.  The below sets a default of "GET" if no method is sent to the function
// function makeAjaxRequest(url, method) {
//   if (!method) {
//     method = "GET";
//   }
// }

//adding "='GET'" in the parameters sets a default.
//Note.  Null is what developers use when they INTEND that the varable be empty in liu of undefined
// function makeAjaxRequest(url, method = "GET") {
//   return method;
// }

//*********video 2 create a user object********
//old
// function User(id){
// 	this.id = id;
// }
//
// function generateID() {
// 	return Math.random()* (999999);
// }
//
// function createAdminUser() {
// 	user.admin = true;
// 	return user;
// }
//
// createAdminUser(newUser(generateID()));

//new//
function User(id) {
  this.id = id;
}

function generateID() {
  return Math.random() * 999999;
}

function createAdminUser(user = new User(generateID())) {
  user.admin = true;
  return user;
}

console.log(createAdminUser());
