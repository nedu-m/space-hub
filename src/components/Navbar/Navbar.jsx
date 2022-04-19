import React, { useState } from 'react';
import {
  Logo,
  MenuBtn,
  Navigation,
  NavigationLink,
  NavigationList,
  NavigationLists,
  NavigationNum,
  StyledNavbar,
} from "../../styles/StyledNavbar/Navbar.styled";
import logo from "../../assets/logo.png";

const Navbar = () => { 
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => { 
    setToggleMenu(!toggleMenu);
  };

  return (
    <StyledNavbar>
      <Logo src={logo} alt="space tourism" />
      <MenuBtn toggleMenu={toggleMenu} onClick={handleMenu}></MenuBtn>
      <Navigation>
        <NavigationLists toggleMenu={toggleMenu}>
          <NavigationList>
            {/* <NavigationLink to="/" onClick={handleMenu}>
              <NavigationNum>00</NavigationNum>
              Home
            </NavigationLink> */}
          </NavigationList>
        </NavigationLists>
      </Navigation>
    </StyledNavbar>
  );

};

export default Navbar;