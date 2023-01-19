import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { NavLogo } from './NavbarStyles';
import '../components/header.css';
import { useCallback, useState } from 'react';
import { useUser } from '../Dashboards/auth';
import Register from './Register';
import Login from './Login';

const Navbar = () => {
  // modal states
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { logout, user } = useUser();

  // register open & close modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // login open & close modal
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    navigate('/');
    logout();
  }, [logout, navigate]);

  return (
    <>
      <header className="header">
        <Container>
          <div className="navigation">
            <div className="logo">
              <NavLogo href="#" className="befited d-flex gap-2 align-items-center">
                Befit
              </NavLogo>
            </div>
            <div className="nav_menu">
              <ul className="nav_list">
                <Link to="/">
                  <li>Home</li>{' '}
                </Link>
                <Link to="/About">
                  {' '}
                  <li>About Us</li>
                </Link>
                <Link to="/Products">
                  {' '}
                  <li>Products</li>{' '}
                </Link>
                <Link to="/Trainers">
                  <li>Trainers</li>
                </Link>
                <Link to="/Testimonialss">
                  {' '}
                  <li>Testimonials</li>{' '}
                </Link>
                <Link to="/UserDashboard">
                  {' '}
                  <li>Dashboard</li>{' '}
                </Link>
              </ul>
            </div>

            <div className="nav_right d-flex align-items-center gap-5">
              {/* <Link to="/Login"> <button className='btn d-flex gap-2 align-items-center'>
  
  Register

  </button>  </Link>
  <Link to='/cart' class> <i class = "fas fa-shopping-cart"/>
  </Link> */}

              {!user?.id ? (
                <>
                  <button className="btn d-flex gap-2 align-items-center" onClick={handleShow}>
                    Register
                  </button>
                </>
              ) : (
                <>
                  <button className="btn d-flex gap-2 align-items-center" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </Container>
      </header>
      {/* signup Modal */}
      <Register handleClose={handleClose} handleLoginShow={handleLoginShow} show={show} />

      {/* login Modal */}
      <Login handleLoginClose={handleLoginClose} handleShow={handleShow} showLogin={showLogin} />
    </>
  );
};
export default Navbar;
