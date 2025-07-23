import React from "react";
import HeroStatic from "../../../Components/Shared/Hero/HeroStatic/HeroStatic";
import HeadingWithSocials from "../../../Components/Shared/HeadingWithSocials/HeadingWithSocials";
import LayoutWrapper from "../../../Components/Global/LayoutWrapper/LayoutWrapper";
import { AILabProjects } from "../../../data/FAQ/Q&A";
import SubPageMainContent from "../../../Components/PageSpecific/FAQ/subPageMainContent/SubPageMainContent";
import FAQCard from "../../../Components/PageSpecific/FAQ/FAQCard";
import { FAQSmallCardsData } from "../../../data/shared/shared";

function AILabs() {
  return (
    <>
      <HeroStatic heroTitle="AI ლაბორატორიები" />;
      <LayoutWrapper>
        <div style={{ width: "100%", marginTop: "8rem" }}>
          <HeadingWithSocials highLightTxt="FAQ / AI ლაბორატორიები" />
          <section style={{ width: "100%", marginTop: "4rem", display: "flex", justifyContent: "space-between", gap: "10rem"}}>
            <SubPageMainContent variant="labs" listData={AILabProjects} />
            <div style={{width: "22%", height: "100%", display: "flex", flexDirection: "column", gap: "10px"}}>
              <FAQCard variant="FAQSmallCard" data={FAQSmallCardsData}/>
            </div>
          </section>
        </div>
      </LayoutWrapper>
    </>
  );
}

export default AILabs;
