import { BsTwitter } from "react-icons/bs";
import { TbBrandMeta } from "react-icons/tb";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import LOGO from "../../assets/images/logodark.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact</h3>
          <h5>7 Elm Street, Bermuda Triangle Atlantis</h5>
          <h5>0803-000-1234</h5>
          <h5>support@gulp.com</h5>
        </div>

        <div className="footer-about">
          <h3>About</h3>
          <h5>
            Gulp is a regional drinks store accessible online. <br /> <br />{" "}
            <br />
            We aim to provide you with drinks from top brands at the best
            prices.
          </h5>
        </div>

        <div className="footer-socials">
          <h3>Socials</h3>

          <div className="footer-icons">
            <a href="https://twitter.com">
              <BsTwitter />
            </a>

            <a href="https://instagram.com">
              <FaInstagramSquare />
            </a>

            <a href="https://meta.com">
              <TbBrandMeta />
            </a>
          </div>
        </div>

        <div className="footer-navigate">
          <h3>Navigate</h3>

          <div className="footer-links">
            <Link to="/home" style={{ color: "white", fontSize: "1.2rem" }}>
              Home
            </Link>
            <br /> <br /> <br />
            <Link to="/foods" style={{ color: "white", fontSize: "1.2rem" }}>
              Alcoholic Drinks
            </Link>
            <br /> <br /> <br />
            <Link to="/contact" style={{ color: "white", fontSize: "1.2rem" }}>
              Non-Alcoholic Drinks
            </Link>
          </div>
        </div>

        <div className="footer-logo">
          <img src={LOGO} alt="logo" />
        </div>
      </div>
      <small>&copy; GULP. All rights reserved</small>
    </section>
  );
};

export default Footer;
