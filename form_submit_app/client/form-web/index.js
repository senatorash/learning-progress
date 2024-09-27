const firstNameInput = document.getElementById("name-input");
const lastNameInput = document.getElementById("last-name-input");
const emailInput = document.getElementById("email-input");
const phoneNumberInput = document.getElementById("phone-number-input");
const messageInput = document.getElementById("message-input");

const emailForm = document.getElementById("form");
const successDiv = document.getElementsByClassName("alert-success")[0];
const errorDiv = document.getElementsByClassName("alert-danger")[0];

const sendEmail = async (event) => {
  errorDiv.textContent = "";
  errorDiv.classList.add("hide");

  event.preventDefault();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const phone = phoneNumberInput.value;
  const message = messageInput.value;

  if (!firstName || !lastName || !email || !phone || !message) {
    errorDiv.classList.remove("hide");
    errorDiv.textContent = "All fields are required";
    return;
  }

  try {
    const response = await fetch("http://localhost:3001/form-submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        phone,
        message,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      return console.log("something went wrong");
    } else {
      successDiv.classList.remove("hide");
      successDiv.textContent = "Email Sent Successfully";
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

emailForm.addEventListener("submit", sendEmail);
