import React from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/logodark.png";
import { NavLink, Link } from "react-router-dom";
import "../../components/styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Alcoholic Drinks",
    path: "/foods",
  },
  {
    display: "Non-Alcoholic Drinks",
    path: "/contact",
  },
  {
    display: "Cart",
    path: "/cart",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          {/* ================= menu ==================*/}
          <div className="navigation">
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active_menu" : " "
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ===================nav right icons ===========================*/}
          <div className="nav__right d-flex align-items-cnter gap-3">
            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>

            <span className="cart_icon">
              <i class="ri-shopping-basket-line"></i>
              <span className="cart_badge">2</span>
            </span>

            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
