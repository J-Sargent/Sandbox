// //***ES5 Bookshop object*********
// function createBookShop(inventory) {
//   return {
//     inventory: inventory,
//     inventoryValue: function() {
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     },
//     priceForTitle: function(title) {
//       return this.inventory.find(book => book.title === title).price;
//     }
//   };
// }
//
// const inventory = [
//   { title: "Harry Potter", price: 10 },
//   { title: "Eloquent Javascript", price: 15 }
// ];
//
// const bookShop = createBookShop(inventory);
// console.log("bookShop", bookShop);
// console.log("inventoryValue", bookShop.inventoryValue());
// console.log("priceForTitle", bookShop.priceForTitle("Harry Potter"));

//***ES6 Bookshop object*********
// function createBookShop(inventory) {
//   return {
//     inventory,
//     inventoryValue() {
//       return this.inventory.reduce((total, book) => total + book.price, 0);
//     },
//     priceForTitle(title) {
//       return this.inventory.find(book => book.title === title).price;
//     }
//   };
// }
//
// const inventory = [
//   { title: "Harry Potter", price: 10 },
//   { title: "Eloquent Javascript", price: 15 }
// ];
//
// const bookShop = createBookShop(inventory);
// console.log("bookShop", bookShop);
// console.log("inventoryValue", bookShop.inventoryValue());
// console.log("priceForTitle", bookShop.priceForTitle("Harry Potter"));
