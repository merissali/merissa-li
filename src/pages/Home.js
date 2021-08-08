import React from "react";
import HeroSection from "../components/layout/HeroSection";
import InfoSection from "../components/layout/InfoSection";

function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection id='about' />
      <InfoSection id='work' />
      <InfoSection id='projects' />
    </>
  );
}

export default Home;
