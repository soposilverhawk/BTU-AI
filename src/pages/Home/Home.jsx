import React from "react";
import HeroSlider from "../../Components/PageSpecific/Home/HeroSlider/HeroSlider";
import BAProgrammeInfo from "../../Components/PageSpecific/Home/BAProgrammeInfo/BAProgrammeInfo";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";
import SuccessStories from "../../Components/PageSpecific/Home/SuccessStories/SuccessStories";

function Home() {
  return (
    <>
      <HeroSlider />
      <LayoutWrapper>
        <div>
          <BAProgrammeInfo />
          <SuccessStories />
        </div>
      </LayoutWrapper>
    </>
  );
}

export default Home;
