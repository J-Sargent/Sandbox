// // ES5 way
// function Car(options) {
//   //options comes in as object
//   this.title = options.title;
// }
//
// Car.prototype.drive = function() {
//   return "vroom";
// };
//
// function Toyota(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }
//
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
//
// Toyota.prototype.honk = function() {
//   return "beep";
// };
//
// const car = new Car({ title: "Focus" });
// const toyota = new Toyota({ color: "red", title: "Daily Driver" });
// console.log("toyota", toyota);
// console.log("toyota.drive", toyota.drive);
// console.log("toyota.honk", toyota.honk);
//
// console.log("car", car);
// console.log("car.drive", car.drive);

// // restructured in ES6
// class Car {
//   constructor({ title }) {
//     this.title = title;
//   }
//   drive() {
//     return "vroom;";
//   }
// }
//
// class Toyota extends Car {
//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }
//   honk() {
//     return "beep";
//   }
// }
//
// const car = new Car({ title: "Toyota" });
// const toyota = new Toyota({ color: "red" });
// console.log("car", car);
// console.log("car.drive", car.drive);
// console.log("car", car);
// console.log("toyota", toyota);
// console.log("toyota.honk", toyota.honk);

//exercise 1
class Monster {
  constructor(options) {
    this.name = options.name;
    this.health = 100;
  }
}

const harpie = new Monster({ name: "harpie" });
console.log("harpie", harpie);

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(snake) {
    return (snake.health -= 10);
  }
}
