// Example1
// ES5
// var expense = {
//   type: "Business",
//   amount: "$45 USD"
// };
// var type = expense.type;
// var amount = expense.amount;

//ES6
// const { type, amount } = expense;
// console.log("amount", amount);
// console.log("type", type);

//example2 objects//
//es5
// var savedFile = {
//   extension: "jpg",
//   name: "repost",
//   size: 14040
// };

// function fileSummary(file) {
//   return `The file ${file.name}.${file.extension} is of size ${file.size}`;
// }
//
// console.log("sentance: ", fileSummary(savedFile));

//es6
// function fileSummary({ name, extension, size }) {
//   return `The file ${name}.${extension} is of size ${size}`;
// }
//
// console.log("sentance: ", fileSummary(savedFile));

//example 3 arrays, pulling off individual elemnents
// const companies = ["google", "facebook", "uber", "walmart"];
//
// const [name, name2, ...rest] = companies;
// console.log("name", name);
// console.log("name2", name2);
// console.log("rest", rest);

// example 4 Using combined Arrays AND Objects (Array of objects)
// Note: His example was with 'location' instead of 'cities'.
//this did not work in chrome and threw a "identifier 'locaiton' has already been declared"
//error.  Q&A section thinks that the deconstructor is looking at the gloal window object
//for locaiton.  Renaming to 'cities' fixed the problem immediately.
// const companies = [
//   { name: "Google", cities: "Mountain View" },
//   { name: "facebook", cities: "Menlo Park" },
//   { name: "Uber", cities: "San Fransisco" }
// ];
//
// const { name, cities } = companies;
// console.log(typeof cities);

//example 4 part 2
// const google = {
//   cities: ["Mountian View", "New York", "London"]
// };
//
// const {
//   cities: [cities]
// } = google;
// console.log("cities", cities);

//example 5
// function signup(username,password){
// 	//create new user
// }
// signup('myname','mypassword');

//example 6
// const points = [
// 	[4,5],
// 	[10,1],
// 	[0,40]
// ];
//
// points.map(pair => {const [x,y] = pair;
//
// });

// exercise 1
// orig
// const profile = {
//   title: 'Engineer',
//   department: 'Engineering'
// };
//
// function isEngineer(profile) {
//   var title = profile.title;
//   var department = profile.department;
//   return title === 'Engineer' && department === 'Engineering';
// }
// const profile = {
//   title: "Engineer",
//   department: "Engineering"
// };
// const { title, department } = profile;
//
//
// const isEngineer = profile => title === "Engineer" && department === "Engineering";

//exercise 2
//orig
// const classes = [
//   ["Chemistry", "9AM", "Mr. Darnick"],
//   ["Physics", "10:15AM", "Mrs. Lithun"],
//   ["Math", "11:30AM", "Mrs. Vitalis"]
// ];
// console.log("classes", classes.flat());
//
// //const classesAsObject;
//
// //solution
// const classesAsObject = classes.map(([subject, time, teacher]) => {
//   return { subject, time, teacher };
// });
// console.log("classesAsObject", classesAsObject);

//exercise 3
//orig
// const numbers = [1, 2, 3];
//
// function double() {
//
// }
//
// console.log(double(numbers));
//solution
const numbers = [1, 2, 3];
const noNumbers = [];

function double([number, ...props]) {
  if (!number) {
    return "error";
  }
  var a = props * 2;

  console.log("props", props);
}

console.log("numbers", double(numbers));
console.log("noNumbers", double(noNumbers));
