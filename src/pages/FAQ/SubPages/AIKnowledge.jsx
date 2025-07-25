import React from "react";
import HeroStatic from "../../../Components/Shared/Hero/HeroStatic/HeroStatic";
import LayoutWrapper from "../../../Components/Global/LayoutWrapper/LayoutWrapper";
import HeadingWithSocials from "../../../Components/Shared/HeadingWithSocials/HeadingWithSocials";
import FAQCard from "../../../Components/PageSpecific/FAQ/FAQCard";
import {
  FAQSmallCardsData,
  FAQBigCardsData,
} from "../../../data/shared/shared";
import FAQSubPagesLayout from "../../../Components/PageSpecific/FAQ/FAQSubPagesLayout";

function AIKnowledge() {
  return (
    <FAQSubPagesLayout
      heroTitle="AI წიგნიერება"
      headingText="FAQ / AI წიგნიერება"
      sectionStyleOverrides={{gap: 0}}
      leftContent={
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
      }
    />
  );
}

export default AIKnowledge;
