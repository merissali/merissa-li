import React, { useState } from "react";
import styled from "styled-components";
import homeBg from "../img/homeBg.jpg";
import { Button } from "./Button";

function HeroSection() {
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <PictureBg src={homeBg}></PictureBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Hi, I'm Merissa!</HeroH1>
        <HeroBtnWrapper>
          <Button to='about'>GET TO KNOW ME</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;

// styles
const HeroContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const PictureBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover
  background: #0c0c0c;
  z-index: -1;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
`;

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 70px;
  margin-top: 35px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroBtnWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
