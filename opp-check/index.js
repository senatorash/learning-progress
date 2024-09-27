// class Product {
//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }
// }

// class ShoppingCartItem {
//   constructor(product, quantity) {
//     this.product = product;
//     this.quantity = quantity;
//   }

//   getTotalPrice() {
//     const total = this.product.price * this.quantity;
//     return total;
//   }
// }

// class ShoppingCart {
//   constructor() {
//     this.items = [];
//   }

//   // to add an item
//   addItem(product, quantity) {
//     // to check if the product already exists in the cart
//     const existingItem = this.items.find(
//       (items) => items.product.id === product.id
//     );
//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       // otherwise, add a new item to the cart
//       this.items.push(new ShoppingCartItem(product, quantity));
//     }
//   }

//   //   to remove an item
//   removeItem(productId) {
//     this.items = this.items.filter((item) => item.product.id !== productId);
//   }

//   //   to get the total of an item
//   getTotalItems() {
//     return this.items.length;
//   }

//   //   to get the totl price
//   getTotalPrice() {
//     return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
//   }

//   //   display values on the console
//   displayCart() {
//     console.log("Cart Items:");
//     this.items.forEach((item) => {
//       console.log(
//         `Product: ${item.product.name}, Quantity: ${
//           item.quantity
//         }, Total: $${item.getTotalPrice()}`
//       );
//     });
//     console.log(`Total Price: $${this.getTotalPrice()}`);
//   }
// }

// // Create some products
// const product1 = new Product(1, "Laptop", 1200);
// const product2 = new Product(2, "Phone", 800);
// const product3 = new Product(3, "Headphones", 150);

// // Create a shopping cart
// const cart = new ShoppingCart();

// // Add items to the cart
// cart.addItem(product1, 1);
// cart.addItem(product2, 2);
// cart.addItem(product3, 3);

// // Display the cart
// cart.displayCart();

// // Remove an item from the cart
// cart.removeItem(2);

// // Display the cart again to see the changes
// cart.displayCart();

//  // load recent searches from local storage
//  const updateRecentSearches = (city) => {
//   let updatedSearches = [...recentSearches];
//   if (!updatedSearches.includes(city)) {
//     // Add new Search term to the start of the array
//     updatedSearches.unshift(city);
//   }
//   // limit to 5 recent searches
//   updatedSearches = updatedSearches.slice(0, 5);

//   setRecentSearches(updatedSearches);
//   localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));

//   const handleSearch = () => {
//     if (searchTerm) {
//       onGetWeatherData(searchTerm);
//     }
//   };
// };

// useEffect(() => {
//   const storedSearches =
//     JSON.parse(localStorage.getItem("recentSearches")) || [];
//   setRecentSearches(storedSearches);
// }, []);
// return;

// let animalOne = {
//   name: "Dog",
//   color: "black",
//   isWi1d: false,
//   makeSound() {
//     console.log(`${this.name} barks`);
//   },
// };

// let animalTwo = {
//   name: "Cat",
//   color: "white",
//   isWi1d: false,
//   makeSound() {
//     console.log(`${this.name} barks`);
//   },
// };

// let animalThree = {
//   name: "Lion",
//   color: "Gold",
//   makeSound() {
//     console.log(`${this.name} roars`);
//   },
// };

// console.log(animalThree.makeSound());

class Animal {
  constructor(name, color, isWild, sound) {
    this.name = name;
    this.color = color;
    this.isWild = isWild;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} ${this.sound} `);
  }
}

let animalOne = new Animal("Dog", "black", false, "barks");
console.log(animalOne);
console.log(animalOne.makeSound());
let animalTwo = new Animal("Cat", "white", false, "meows");
let animalThree = new Animal("Lion", "Gold", true, "roars");
