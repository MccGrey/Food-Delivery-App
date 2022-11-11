import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container } from "reactstrap";

import HERO1 from "../../src/assets/images/cognac 1.png";
import HERO2 from "../../src/assets/images/gin 1.png";
import HERO3 from "../../src/assets/images/iced tea 1.png";
import HERO4 from "../../src/assets/images/juice 1.png";
import HERO5 from "../../src/assets/images/whiskey 1.png";
import HERO6 from "../../src/assets/images/wine 1.png";

import "../../src/components/styles/hero-section.css";

const Home = () => {
  const data = [
    {
      id: 1,
      image: HERO1,
    },

    {
      id: 2,
      image: HERO2,
    },

    {
      id: 3,
      image: HERO3,
    },

    {
      id: 4,
      image: HERO4,
    },

    {
      id: 5,
      image: HERO5,
    },

    {
      id: 6,
      image: HERO6,
    },
  ];

  return (
    <Helmet title="Home">
      <section className="hero-section">
        <Container></Container>
      </section>
    </Helmet>
  );
};

export default Home;
