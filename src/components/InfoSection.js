import React from "react";
import styled from "styled-components";
import About from "./sections/About";
import Experiences from "./sections/Experiences";

function InfoSection({ id }) {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          {id === "about" && <About />}
          {id === "experiences" && <Experiences />}
        </InfoWrapper>
        <SectionLine />
      </InfoContainer>
    </>
  );
}

export default InfoSection;

// styles
const InfoContainer = styled.div`
  color: #fff;
  background: #fff;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
  padding-top: 24px;
  padding: 24px 20px 5px;
  justify-content: center;
`;
const SectionLine = styled.div`
  width: 100%;
  background: #c5c5c571;
  height: 1px;
`;
