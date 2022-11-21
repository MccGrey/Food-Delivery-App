import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import HERO1 from "../../src/assets/images/cognac 1.png";
// import HERO2 from "../../src/assets/images/gin 1.png";
// import HERO3 from "../../src/assets/images/iced tea 1.png";
// import HERO4 from "../../src/assets/images/juice 1.png";
// import HERO5 from "../../src/assets/images/whiskey 1.png";
// import HERO6 from "../../src/assets/images/wine 1.png";

import "../../src/components/styles/hero-section.css";

const Home = () => {
  // const data = [
  //   {
  //     id: 1,
  //     image: HERO1,
  //   },

  //   {
  //     id: 2,
  //     image: HERO2,
  //   },

  //   {
  //     id: 3,
  //     image: HERO3,
  //   },

  //   {
  //     id: 4,
  //     image: HERO4,
  //   },

  //   {
  //     id: 5,
  //     image: HERO5,
  //   },

  //   {
  //     id: 6,
  //     image: HERO6,
  //   },
  // ];

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <div className="hero-container">
            <div className="hero-desc">
              <h3>You should never run out of drinks</h3>
              <p>
                We are your go to source for all the drinks you need, at all
                times. Delivered almost immediately at your doorstep
              </p>
              <Link to="/home">
                <button className="shop-now"> Shop Now</button>
              </Link>
            </div>
            <div className="hero-swiper">
              <div className="hero-image">
                <img src={HERO1} alt="" />
              </div>
            </div>
          </div>
        </Container>
        <div className="flash-timer">
          <div className="  flash-sale">
            <h2>Flash Sale</h2>
            <h3>12hrs:20mins:24secs</h3>
          </div>
        </div>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-5">
                <button className="all__btn foodBtnActive">All</button>
                <button className="d-flex align-items-center gap-2">
                  Alcoholic
                </button>
                <button className="d-flex align-items-center gap-2">
                  Non-alcoholic
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
