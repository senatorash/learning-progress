import { Link } from "react-router-dom";
import heroImage from "../../Assets/hero.jpg";
import classes from "./Home.module.css";

const Hero = () => {
  return (
    <section className={`container ${classes.hero_container}`}>
      <div className="row">
        <div className={`col-md-6 ${classes.image_div}`}>
          <img
            src={heroImage}
            alt="hero_image"
            className={classes.hero_image}
          />
        </div>

        <div className="col-md-6">
          <h3>About Us</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            doloribus non iste doloremque cumque cupiditate laborum quaerat quas
            ea molestiae nesciunt dolor optio iusto magni sed et aperiam,
            commodi voluptate.Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Est doloribus non iste doloremque cumque
            cupiditate laborum quaerat quas ea molestiae nesciunt dolor optio
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            doloribus non iste doloremque cumque cupiditate laborum quaerat quas
            ea molestiae nesciunt dolor optio iusto magni sed et aperiam,
            commodi voluptate.Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Est doloribus non iste doloremque cumque
          </p>

          <div>
            <Link to="/about" className="btn btn-secondary">
              READ MORE...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
