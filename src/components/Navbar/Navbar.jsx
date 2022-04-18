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
    </StyledNavbar>
  );

};

export default Navbar;