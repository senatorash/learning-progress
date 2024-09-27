class Person {
  constructor(firstName, lastName, email, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
  }

  showUserDetails() {
    return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Email: ${this.email}, Age: ${this.age}`;
  }

  incrementUserAge() {
    return this.age++;
  }
}

class Animal extends Person {
  constructor(firstName, lastName, email, age, color) {
    super(firstName, lastName, email, age);
    this.color = color;
  }
}

const person = new Person("John", "Doe", "johndoe@gmail.com", 40);
const person2 = new Person("ashimi", "seide", "ashimi@gmail.com", 50);

console.log(person, person2);

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const error = new CustomError("Server Error", 500);

console.log(error.message, error.statusCode);
