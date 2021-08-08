import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import styled from "styled-components";

function Navbar() {
  // data
  const navbarData = [
    {
      name: "About",
      to: "about",
    },
    {
      name: "Work",
      to: "work",
    },
    {
      name: "Projects",
      to: "projects",
    },
    {
      name: "Interests",
      to: "interests",
    },
  ];

  // state
  const [areLinksVisible, setAreLinksVisible] = useState(true);

  // functions
  const showLinks = () => {
    if (window.innerWidth <= 960) {
      setAreLinksVisible(false);
    } else {
      setAreLinksVisible(true);
    }
  };

  // effects
  useEffect(() => {
    showLinks();
  }, []);

  window.addEventListener("resize", showLinks);

  // render items
  const navbarJSX = navbarData.map((navlink) => {
    return (
      <NavItem>
        <NavLink
          activeClass='selected'
          to={navlink.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {navlink.name}
        </NavLink>
      </NavItem>
    );
  });

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='home' spy={true} smooth={true} offset={-20} duration={500}>
          MERISSA LI
        </NavLogo>

        <NavMenu>{areLinksVisible && navbarJSX}</NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;

// styles

const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  padding-top: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #c5c5c571;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  max-width: 1500px;
`;

const NavLogo = styled(Link)`
  color: #000;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.05em;
  text-align: center;
  min-width: 190px;
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
  list-style: none;
  text-align: center;
  width: 75vw;
  justify-content: end;
  margin-bottom: 0;

  &.active {
    background: #242222;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }
`;

const NavItem = styled.li`
  height: 80px;
  .selected {
    text-decoration: underline;
  }
`;

const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: Metropolis;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.05em;
  text-align: center;
  cursor: pointer;

  ${({ hover }) =>
    hover &&
    `
  text-decoration: underline;
  transition: all 0.2s ease-out;
`}
`;
