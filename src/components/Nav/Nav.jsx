import React, { useState } from "react";

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
  const [navBar, setNavBar] = useState(false);

  const [showMobileMenu, setShowMobileMenu] = useState(true);

  const changeNavBar = () => {
    console.log(window.scrollY)
    
    if (window.scrollY <= 400) {
      setNavBar(false);
    } else {
      setNavBar(true);
    }
  };

  window.addEventListener("scroll", changeNavBar);
  const scrollToHomeSection = () => {
    const homeSection = document.querySelector("#home-section");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const scrollToAboutSection = () => {
    const aboutSection = document.querySelector("#about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const scrollToPortfolioSection = () => {
    const portfolioSection = document.querySelector("#portfolio-section");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const scrollToContactMeSection = () => {
    const contactSection = document.querySelector("#contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <Container style={navBar ? { backgroundColor: "#73717425" } : { backgroundColor: "#fa12c8" }}>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <p></p>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem onClick={scrollToHomeSection}>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  HOME
                </div>
              </MenuItemLink>
            </MenuItem>

            <MenuItem onClick={scrollToAboutSection}>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaUserAlt />
                  ABAUT
                </div>
              </MenuItemLink>
            </MenuItem>

            <MenuItem onClick={scrollToPortfolioSection}>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaBriefcase />
PROYECTOS                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={scrollToContactMeSection}>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaGlasses />
                  CONTACTME
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
