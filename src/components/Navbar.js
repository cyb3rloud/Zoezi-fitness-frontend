import React, { useState, Fragment } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from "./NavbarStyles";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Navbar = ({ handleLoginClick }) => {
  const handleClick = () => {
    handleLoginClick();
  };
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Fragment>
      <div className="topnav">
        contact us
        <FontAwesomeIcon icon="fa-solid fa-phone" />
      </div>
      <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <NavContainer>
          <NavLogo href="#" className="befited">
            Befit
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Link to="/">
                <button className="navbar-button">Home</button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/About">
                <button className="navbar-button">About Us</button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Products">
                <button className="navbar-button">Products</button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Trainers">
                <button className="navbar-button">Trainers</button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Testimonialss">
                <button className="navbar-button">Testimonials</button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Dashboard">
                <button className="navbar-button">Dashboard</button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Login">
                <button className="navbar-button-register">
                  {" "}
                  LOGIN OR
                  <br />
                  REGISTER
                </button>
              </Link>{" "}
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
