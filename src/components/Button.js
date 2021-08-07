import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// const STYLES = ["btn--primary", "btn--outline"];

// const SIZES = ["btn--medium", "btn--large"];

export const Button = ({ to, children }) => {
  return (
    <Link to={to}>
      <StyledButton>{children}</StyledButton>
    </Link>
  );
};

const StyledButton = styled.button`
  padding: 8px 20px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  padding: 8px 20px;
  border: 3px solid #fff;
  transition: all 0.3s ease-out;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -0.05em;
  text-transform: capitalize;
`;
