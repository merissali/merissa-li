import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

export const Button = ({ to, children }) => {
  // state
  const [hover, setHover] = useState(false);

  // functions
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <StyledButton to={to} onMouseEnter={onHover} onMouseLeave={onHover}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Link)`
  padding: 15px 30px;
  border-radius: 5px;
  background: transparent;
  white-space: nowrap;
  color: #fff;
  outline: none;
  border: 3px solid #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #bbcae4;
  }
`;
