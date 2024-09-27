// // var studentFirstName = "Ashimi";
// // var studentLastName = "Seide";
// // var studentAge = 45;
// // var isSudentGraduated = false;

// // var student2FirstName = "Oluchi";
// // var student2LastName = "Okwuosa";
// // var student2Age = 50;
// // var isSudent2Graduated = false;

// // JavaScript Object
// // var studentOne = {
// //   firstName: "Ashimi",
// //   lastName: "Seide",
// //   age: 45,
// //   isGraduated: false,
// // };

// // var student2 = {
// //   firstName: "Oluchi",
// //   lastName: "Okwuosa",
// //   age: 50,
// //   isGraduated: false,
// // };

// // console.log(studentOne);
// // to print out only one value of the object
// // console.log(studentOne.lastName);
// // console.log(student2);

// // object destructuring
// // const { firstName, age, lastName, isGraduated } = studentOne;

// // console.log(firstName);

// // array data structure

// var students = [
//   {
//     firstName: "Ashimi",
//     lastName: "Seide",
//     age: 45,
//     isGraduated: false,
//   },

//   {
//     firstName: "Oluchi",
//     lastName: "Okwuosa",
//     age: 50,
//     isGraduated: false,
//   },
// ];

// // console.log(students);
// console.log(students[0].firstName);

// // array
// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(nums[9]);

// // do while loop

// // for in loop
// // for of loop

// while loop
// var index = 0;
// while (index < nums.length) {
//   // print out every element in the array by the current value of the index
//   console.log(nums[index]);

//   // increment index by 1 after each loop
//   index++;
// }

// // for loop
// // for (var index = 0; index < nums.length; index++) {
// //   console.log(nums[index]);
// // }

// // for in loop
// for (index in nums) {
//   console.log(nums[index]);
// }

// // for of  loop
// // any name can be used in place of nump
// for (num of nums) {
//   console.log(num);
// }

// var firstName = "Ashimi";
// for (student of students) {
//   if ((first.name = "Ashimi")) {
//     console.log(student);
//   }
// }

//selection of html elements through the help of DOM
// return a form element with an id of the form
var regForm = document.getElementById("form");

var errorDiv = document.getElementsByClassName("alert-danger")[0];

var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");
var confirmPasswordInput = document.getElementById("confirm-password-input");
//prevent loading of the page
function onSubmitForm(event) {
  event.preventDefault();

  var email = emailInput.value;
  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;

  //   console.log(email, password, confirmpassword);

  // check if all inputs are not empty
  if (
    email.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === ""
  ) {
    // var errorDiv = document.getElementsByClassName("alert-danger")[0];
    errorDiv.classList.remove("hide");
    return (errorDiv.textContent = "All fields are required");
  }
  //   check if email is valid
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var emailIsValid = regex.test(email);

  if (!emailIsValid) {
    errorDiv.classList.remove("hide");
    return (errorDiv.textContent = "Invalid Email Address");
  }
  // check if password is valid
  if (password.length < 8) {
    errorDiv.classList.remove("hide");
    return (errorDiv.textContent = "Password must be at least 8 characters");
  }
  // check if the password and confirm password are the same
  if (password !== confirmPassword) {
    errorDiv.classList.remove("hide");
    return (errorDiv.textContent = "passwords does not match");
  }
}

// add an event listener to the form element
regForm.addEventListener("submit", onSubmitForm);
