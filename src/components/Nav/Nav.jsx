import React, { useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Navbar.elements";

import {
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
  "/contact": {backgroundColor:"#57adadf6" },
  
};

const routeColor = {
  "/":{ color: "#faf8fdf6" },
  "/abaut": {color:"#faf8fdf6" },
  "/portfolio": {color:"#593cfbf6" },
  "/contact": {color:"#6d3b7df6"},
  
};



const Navbar = () => {
  const navigate = useNavigate()
  const myLocation = useLocation().pathname;
  

  const routeStyle = routeStyles[myLocation] || {}; // Obtén el estilo para la ruta actual
  const routeColors = routeColor[myLocation] || {}; // Obtén el estilo para la ruta actual

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
                <MenuItemLink style={routeColors}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <FaHome />
                    HOME
                  </div>
                </MenuItemLink>
              </MenuItem>
            
       
              <MenuItem onClick={ handleLanding}>
                <MenuItemLink  style={routeColors}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <FaUserAlt />
                    ABOUT ME
                  </div>
                </MenuItemLink>
              </MenuItem>
           
            <MenuItem onClick={handlePortfolio}> 
              <MenuItemLink style={routeColors} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaBriefcase />
                  PORTFOLIO
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={handleContact}>
              <MenuItemLink style={routeColors} onClick={() => setShowMobileMenu(!showMobileMenu)}>
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
