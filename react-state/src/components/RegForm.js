import React, { useState } from "react";
const RegForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  console.log(firstName, lastName, email, password, confirmPassword);

  const submitFormHandler = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return setErrorMessage("All input fields are required");
    }

    if (!email.includes("@")) {
      return setErrorMessage("Invalid email address");
    }

    return console.log("Form inputs are valid, ready to send request");
  };
  return (
    <section className="container mt-5">
      <h1 className="text-center mb-5">Registration Form</h1>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
          <form onSubmit={submitFormHandler}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="submit"
                className="form-control btn btn-secondary"
                value="Register"
              />
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </section>
  );
};

export default RegForm;
