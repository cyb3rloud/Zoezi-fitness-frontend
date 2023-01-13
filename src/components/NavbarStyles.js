import styled from 'styled-components';
export const Nav = styled.nav`
  background: #5c5c5c;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* Fix your navbar by using below two lines of code */
  position: sticky;
  top: 0;
  /* Fix your navbar by using above two lines of code */
  z-index: 10;
  transition: 1.8s all ease @media screen and (max-width: 960px) {
    transition: 1.8s all ease;
  }
`;

export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled.a`
color: white;
justify-self: flex-start;
cursor: pointer;
font-size: 10.5rem;
display: flex;
align-items: center;
margin-left: -120px;
font-weight: normal;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top:0;
	right: 0;
	transform: translate(-100%, 60%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
text-align: center;
margin-right: -60px;
@media screen and (max-width: 960px) {
	display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled.a`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;