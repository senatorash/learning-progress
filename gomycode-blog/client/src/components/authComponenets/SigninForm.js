import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../../lib/authApis/authApis";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorComponent from "../commons/ErrorComponent";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { isLoading, error, isSuccess, isError, data }] =
    useLoginUserMutation();

  const navigate = useNavigate();

  const loginUserHandler = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      return;
    }
    return loginUser({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("refreshToken", data?.refreshToken);
      navigate("/");
    }
  }, [isSuccess]);
  return (
    <form onSubmit={loginUserHandler}>
      <h3 className="mb-5 mt-5">Sign in to get started</h3>

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
          type="Password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <input
          className="form-control btn btn-secondary"
          type="submit"
          value={isLoading ? "Please Wait..." : "Sign in"}
        />
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <p>
          Don't have an account <Link to="/auth/signup">Sign up</Link>
        </p>

        <p>
          Forgot Password <Link to="/auth/reset-password">Reset</Link>
        </p>
      </div>
    </form>
  );
};
export default SigninForm;
