import React from "react";
import HeroSlider from "../../Components/PageSpecific/Home/HeroSlider/HeroSlider";
import BAProgrammeInfo from "../../Components/PageSpecific/Home/BAProgrammeInfo/BAProgrammeInfo";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";
import SuccessStories from "../../Components/PageSpecific/Home/SuccessStories/SuccessStories";
import WomenProgrammes from "../../Components/PageSpecific/Home/WomenProgrammes/WomenProgrammes";

function Home() {
  return (
    <>
      <HeroSlider />
      <LayoutWrapper>
        <div>
          <BAProgrammeInfo />
          <SuccessStories />
          <WomenProgrammes />
        </div>
      </LayoutWrapper>
    </>
  );
}

export default Home;
