import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <>
      <CheckOutPortfolio
        href='https://merissali.notion.site/merissali/Merissa-s-Portfolio-1b3f46e78713456ead16bcb4b42a4b88'
        target='_blank'
      >
        CHECK OUT MY PORTFOLIO HERE
      </CheckOutPortfolio>
    </>
  );
}

export default Projects;

// const ComingSoon = styled.h1`
//   height: 300px;
//   padding-top: 150px;
//   color: #91accd;
// `;

const CheckOutPortfolio = styled.a`
  padding: 30px 50px;
  margin-top: 10rem;
  margin-bottom: 10rem;
  border-radius: 10px;
  background: transparent;
  white-space: nowrap;
  color: #4d5868;
  outline: none;
  border: 4px solid #4d5868;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #4d5868;
    color: #fff;
  }
`;
