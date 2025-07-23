import React from "react";
import HeroStatic from "../../../Components/Shared/Hero/HeroStatic/HeroStatic";
import LayoutWrapper from "../../../Components/Global/LayoutWrapper/LayoutWrapper";
import HeadingWithSocials from "../../../Components/Shared/HeadingWithSocials/HeadingWithSocials";
import SubPageMainContent from "../../../Components/PageSpecific/FAQ/subPageMainContent/SubPageMainContent";
import { AIResearches } from "../../../data/FAQ/Q&A";
import FAQCard from "../../../Components/PageSpecific/FAQ/FAQCard";
import { FAQSmallCardsData } from "../../../data/shared/shared";

function AIStudies() {
  return (
    <>
      <HeroStatic heroTitle="AI ლაბორატორიები" />;
      <LayoutWrapper>
        <div style={{ width: "100%", marginTop: "8rem" }}>
          <HeadingWithSocials highLightTxt="FAQ / AI კვლევები" />
          <section
            style={{
              width: "100%",
              marginTop: "4rem",
              display: "flex",
              justifyContent: "space-between",
              gap: "10rem",
            }}
          >
            <SubPageMainContent variant="research" listData={AIResearches} />
            <div
              style={{
                width: "22%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <FAQCard variant="FAQSmallCard" data={FAQSmallCardsData} />
            </div>
          </section>
        </div>
      </LayoutWrapper>
    </>
  );
}

export default AIStudies;
