import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import HERO1 from "../../src/assets/images/cognac 1.png";
import HERO2 from "../../src/assets/images/gin 1.png";
import HERO3 from "../../src/assets/images/iced tea 1.png";
import HERO4 from "../../src/assets/images/juice 1.png";
import HERO5 from "../../src/assets/images/whiskey 1.png";
import HERO6 from "../../src/assets/images/wine 1.png";

import "../../src/components/styles/hero-section.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

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
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={40}
              className=" mySwiper hero-swiper"
            >
              {data.map(({ image }, index) => {
                return (
                  <SwiperSlide key={index} className="hero-image">
                    <img src={image} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
