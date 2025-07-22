import React from "react";
import HeroSlider from "../../Components/PageSpecific/Home/HeroSlider/HeroSlider";
import BAProgrammeInfo from "../../Components/PageSpecific/Home/BAProgrammeInfo/BAProgrammeInfo";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";
import InfoCardSection from "../../Components/PageSpecific/Home/InfoCardSection/InfoCardSection";
import { successStoriesCards, programmesCards } from "../../data/home/homeData";

function Home() {
  return (
    <>
      <HeroSlider />
      <LayoutWrapper>
        <div>
          <BAProgrammeInfo />
          <InfoCardSection title="წარმატების ისტორიები" data={successStoriesCards} variant="success"/>
          <InfoCardSection title="ქალების გაძლიერების პროგრამები" data={programmesCards} variant="programes"/>
        </div>
      </LayoutWrapper>
    </>
  );
}

export default Home;
