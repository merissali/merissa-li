import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton); // whenever you resize the screen, showButton will run

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={closeMobileMenu}>
            MERISSA LI
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLink to='/about' onClick={closeMobileMenu}>
                About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to='/experiences' onClick={closeMobileMenu}>
                Experiences
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to='/projects' onClick={closeMobileMenu}>
                Projects
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to='/interests' onClick={closeMobileMenu}>
                Interests
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
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
  margin-bottom: 3rem;
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
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
  list-style: none;
  text-align: center;
  width: 75vw;
  justify-content: end;

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

  ${({ hover }) =>
    hover &&
    `
  text-decoration: underline;
  transition: all 0.2s ease-out;
`}
`;
