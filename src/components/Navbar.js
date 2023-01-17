import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {NavLogo} from "./NavbarStyles"
import '../components/header.css'

const Navbar = () => {
  return (
  <header className="header">
  <Container>
    <div className='navigation'>
<div className="logo">

    <h1 className=" d-flex gap-2 align-items-center">
    Befit
  </h1>
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

</div>
    </div>
  </Container>
  </header>
  )
}
export default Navbar;