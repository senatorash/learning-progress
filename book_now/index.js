let regform = document.getElementById("form");
let errorDiv = document.getElementsByClassName("alert-danger")[0];
let firstNameInput = document.getElementById("firstname-input");
let lastNameInput = document.getElementById("lastname-input");
let emailInput = document.getElementById("email-input");
let descripInput = document.getElementById("descrip-input");
let dateInput = document.getElementById("date-input");

const onSUbmitform = (event) => {
  event.preventDefault();
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let email = emailInput.value;
  let descrip = descripInput.value;
  let date = dateInput.value;

  if (
    firstName.trim() === "" ||
    lastName.trim() === "" ||
    email.trim() === "" ||
    descrip.trim() === "" ||
    date.trim() === ""
  ) {
    errorDiv.classList.remove("hide");
    return (errorDiv.textContent = "Please fill in all fields");
  }

  //   let selectedDate = new Date(date);
  //   console.log(selectedDate);

  console.log(firstName, lastName, email, descrip, date);
};

regform.addEventListener("submit", onSUbmitform);

dateInput.addEventListener("change", (event) => {
  let selectedDate = new Date(event.target.value);
  console.log(selectedDate);
});
