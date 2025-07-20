import React from "react";
import HeroSlider from "../../Components/PageSpecific/Home/HeroSlider/HeroSlider";
import BAProgrammeInfo from "../../Components/PageSpecific/Home/BAProgrammeInfo/BAProgrammeInfo";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";

function Home() {
  return (
    <div>
      <HeroSlider />
      <LayoutWrapper>
        <BAProgrammeInfo />
      </LayoutWrapper>
    </div>
  );
}

export default Home;
