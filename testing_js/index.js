const emailInput = document.getElementById("input");
const emailForm = document.getElementById("form");
const errorDiv = document.getElementsByClassName("alert-danger")[0];

const sendEmail = async (event) => {
  event.preventDefault();

  const email = emailInput.value;

  if (!email) {
    return;
  }

  try {
    const response = await fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      return console.log("something went wrong");
    }
  } catch (error) {
    console.log(error);
  }
};

emailForm.addEventListener("submit", sendEmail);
