import React from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection id='about' />
      <InfoSection id='experiences' />
    </>
  );
}

export default Home;
