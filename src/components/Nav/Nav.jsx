import React, { useState } from "react";
import { useNavigate} from "react-router-dom";



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




const Navbar = () => {
  const navigate = useNavigate()
  

 

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
    <Container value={{style: {backgoround:"#fa12c8"}}}>
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
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
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
