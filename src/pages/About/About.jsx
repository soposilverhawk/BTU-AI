import React from "react";
import HeroStatic from "../../Components/Shared/Hero/HeroStatic/HeroStatic";
import Principles from "../../Components/PageSpecific/About/Principles";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";

function About() {
  return (
    <>
      <HeroStatic heroTitle="ჩვენს შესახებ" />;
      <LayoutWrapper>
        <Principles />
      </LayoutWrapper>
    </>
  );
}

export default About;
