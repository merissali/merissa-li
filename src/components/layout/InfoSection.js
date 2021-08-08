import React from "react";
import styled from "styled-components";
import About from "../sections/About";
import Work from "../sections/Work";
import Projects from "../sections/Projects";

function InfoSection({ id }) {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          {id === "about" && <About />}
          {id === "work" && <Work />}
          {id === "projects" && <Projects />}
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
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 6rem;
  padding-top: 4rem;
  justify-content: center;
`;
const SectionLine = styled.div`
  width: 100%;
  background: #c5c5c571;
  height: 1px;
`;
