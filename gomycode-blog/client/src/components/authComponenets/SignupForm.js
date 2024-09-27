import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCreateNewUserMutation } from "../../lib/userApis";
import ErrorComponent from "../commons/ErrorComponent";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const [createNewUser, { isLoading, error, isSuccess, isError }] =
    useCreateNewUserMutation();

  //  submit form handler function
  const submitFormHandler = async (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      return;
    }

    return createNewUser({ email, password, confirmPassword });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/auth/verify");
    }
  }, [isSuccess]);

  console.log(error);
  console.log(isSuccess);

  return (
    <form onSubmit={submitFormHandler}>
      <h3 className="mb-5 mt-5">Sign up to get started</h3>

      {isError && (
        <ErrorComponent
          errorMessage={error?.data?.error || "something went wrong"}
        />
      )}
      <div className="form-group mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <input
          className="form-control"
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <input
          className="form-control btn btn-secondary"
          type="submit"
          placeholder={isLoading ? "Please Wait..." : "Signup"}
        />
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <p>
          Already have an account <Link to="/auth/signin">Sign in</Link>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
