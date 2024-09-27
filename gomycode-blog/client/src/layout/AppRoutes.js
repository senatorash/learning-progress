import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import SingleBlogPage from "../pages/SingleBlogPage";
import AuthPage from "../pages/AuthPage";
import SigninForm from "../components/authComponenets/SigninForm.js";
import SignupForm from "../components/authComponenets/SignupForm.js";
import VerifyAccountForm from "../components/authComponenets/VerifyAccountForm.js";
import CreateBlogPage from "../pages/CreateBlogPage.js";
import ProtectedRoutes from "./ProtectedRoutes.js";

const AppRoutes = () => {
  const { user } = useSelector((state) => state.userState);
  console.log(user);
  return (
    <Routes>
      <Route
        path="*"
        element={<h1 style={{ marginTop: "100px" }}>Page Not Found</h1>}
      />
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blogs/:blogId" element={<SingleBlogPage />} />

      <Route path="/auth/login" element={<AuthPage />} />

      <Route path="/auth" element={<AuthPage />}>
        <Route path="signin" element={<SigninForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="verify" element={<VerifyAccountForm />} />
      </Route>

      <Route
        path="/blogs/create"
        element={
          <ProtectedRoutes user={user}>
            <CreateBlogPage />
          </ProtectedRoutes>
          // or <ProtectedRoutes user={user} children={<CreateBlogPage />} />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
