import React from "react";
import HeroStatic from "../../../Components/Shared/Hero/HeroStatic/HeroStatic";
import LayoutWrapper from "../../../Components/Global/LayoutWrapper/LayoutWrapper";
import HeadingWithSocials from "../../../Components/Shared/HeadingWithSocials/HeadingWithSocials";
import FAQCard from "../../../Components/PageSpecific/FAQ/FAQCard";
import {
  FAQSmallCardsData,
  FAQBigCardsData,
} from "../../../data/shared/shared";

function AIKnowledge() {
  return (
    <>
      <HeroStatic heroTitle="AI წიგნიერება" />;
      <LayoutWrapper>
        <div style={{ width: "100%", marginTop: "8rem" }}>
          <HeadingWithSocials highLightTxt="FAQ / AI წიგნიერება" />
          <section
            style={{
              width: "100%",
              marginTop: "4rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "78%",
                display: "flex",
                flexWrap: "wrap",
                gap: "15px 50px",
                paddingTop: "5rem",
              }}
            >
              <FAQCard variant="FAQBigCard" data={FAQBigCardsData} />
            </div>
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

export default AIKnowledge;
