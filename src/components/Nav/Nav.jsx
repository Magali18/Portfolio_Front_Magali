import React, { useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";

import {
  Container,
  LogoContainer,
  Wrapper,
  Wrapper1,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Navbar.elements";

import {
  FaBattleNet,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";

import { IconContext } from "react-icons";


const routeStyles = {
  "/":{ backgroundColor: "#fa12c8" },
  "/abaut": {backgroundColor:"#ed4b9771" },
  "/portfolio": {backgroundColor:"#c281f0" },
  "/contact": {backgroundColor:"#7afffff6" },
  
};

const routeColor = {
  "/":{ color: "#fa12c8" },
  "/abaut": {color:"#ed4b9771" },
  "/portfolio": {color:"#c281f0" },
  "/contact": {color:"#5c2abaf6"},
  
};



const Navbar = () => {
  const navigate = useNavigate()
  const myLocation = useLocation().pathname;
  

  const routeStyle = routeStyles[myLocation] || {}; // Obtén el estilo para la ruta actual
  const routeColor = routeColor[myLocation] || {}; // Obtén el estilo para la ruta actual

  const [showMobileMenu, setShowMobileMenu] = useState(false);

 const handleLanding = () => {
    navigate('/abaut');
  };
  
  const handleAbaut = () => {
    navigate('/');
  };
  
  const handlePortfolio = () => {
    navigate('/portfolio');
  };
    const handleContact = () => {
    navigate('/contact');
  };


  return (
    <Container style={routeStyle}>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em"}}}>
          <LogoContainer>
            <p></p>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
          
              <MenuItem onClick={handleAbaut}>
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <FaHome />
                    HOME
                  </div>
                </MenuItemLink>
              </MenuItem>
            
       
              <MenuItem onClick={ handleLanding}>
                <MenuItemLink
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <FaUserAlt />
                    ABOUT ME
                  </div>
                </MenuItemLink>
              </MenuItem>
           
            <MenuItem onClick={handlePortfolio}> 
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaBriefcase />
                  PORTFOLIO
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={handleContact}>
              <MenuItemLink style={routeColor} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaGlasses />
                  CONTACT ME
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
      );
};

export default Navbar;
