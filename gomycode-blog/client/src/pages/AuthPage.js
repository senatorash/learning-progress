import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { user } = useSelector((state) => state.userState);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-3 col-12"></div>
        <div className="col-lg-6 col-12">
          <Outlet />
        </div>
        <div className="col-lg-3 col-12"></div>
      </div>
    </section>
  );
};

export default AuthPage;
