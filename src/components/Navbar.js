import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {NavLogo} from "./NavbarStyles"
import '../components/header.css'

const Navbar = () => {
  return (
<<<<<<< HEAD
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
              <Link to="/UserDashboard">
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
=======
  <header className="header">
  <Container>
    <div className='navigation'>
<div className="logo">

    <NavLogo href="#" className="befited d-flex gap-2 align-items-center">
    Befit
  </NavLogo>
</div>
<div className='nav_menu'>
    <ul className="nav_list">
    <Link to="/"><li>Home</li> </Link>
    <Link to="/About"> <li>About Us</li></Link>
    <Link to="/Products"> <li>Products</li> </Link>
    <Link to="/Trainers"><li>Trainers</li></Link>
    <Link to="/Testimonialss"> <li>Testimonials</li> </Link>
    <Link to="/Dashboard"> <li>Dashboard</li> </Link>
    </ul>
</div>

<div className='nav_right d-flex align-items-center gap-5'>
<Link to="/Login"> <button className='btn d-flex gap-2 align-items-center'>Register
  </button>  </Link>
  <Link to='/cart' class> <i class = "fas fa-shopping-cart"/>
  </Link>
>>>>>>> 0f36333d70b9cbf4fd784ffce3044735f82d12ac

</div>
    </div>
  </Container>
  </header>
  )
}
export default Navbar;