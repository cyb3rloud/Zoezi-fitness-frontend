import React, { useState, Fragment } from 'react'
import { FaBars } from 'react-icons/fa';
import {
Nav,
NavContainer,
NavLogo,
NavItem,
NavLinks,
NavMenu,
MobileIcon,
} from './NavbarStyles';
import {NavLink} from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar = () => {
const [colorChange, setColorchange] = useState(false);
const changeNavbarColor = () =>{
	if(window.scrollY >= 80){
	setColorchange(true);
	}
	else{
	setColorchange(false);
	}
};
window.addEventListener('scroll', changeNavbarColor);
return (
	<Fragment>
        <div className='topnav'>contact us<FontAwesomeIcon icon="fa-solid fa-phone" /></div>
		<Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
		<NavContainer>
			<NavLogo href="#" className='befit'>Befit</NavLogo>
			<MobileIcon>
			<FaBars />
			</MobileIcon>
			<NavMenu>
				<NavLink to ='/'>
				<button className='navbar-button'>Home</button>
				</NavLink>
				<NavLink to ='/about-us' >
                <button className='navbar-button'>About Us</button>				</NavItem>
				<NavItem>
                <button className='navbar-button'>Products &  Services</button>				</NavItem>
				<NavItem>
                <button className='navbar-button'>Testimonials</button>				</NavItem>
				<NavItem>
                <button className='navbar-button-register'> LOGIN OR<br/>REGISTER</button>				</NavItem>
			</NavMenu>
		</NavContainer>
		</Nav>
	</Fragment>
	)
}

export default Navbar;
