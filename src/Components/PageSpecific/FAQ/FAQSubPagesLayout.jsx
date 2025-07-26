import React from "react";
import HeroStatic from "../../Shared/Hero/HeroStatic/HeroStatic";
import HeadingWithSocials from "../../Shared/HeadingWithSocials/HeadingWithSocials";
import LayoutWrapper from "../../Global/LayoutWrapper/LayoutWrapper";
import FAQCard from "./FAQCard";
import { FAQSmallCardsData } from "../../../data/shared/shared";

function FAQSubPagesLayout({
  heroTitle,
  headingText = true,
  leftContent,
  rightSidebar = <FAQCard variant="FAQSmallCard" data={FAQSmallCardsData} />,
  sectionStyleOverrides = {},
}) {
  return (
    <>
      <HeroStatic heroTitle={heroTitle} />
      <LayoutWrapper>
        <div style={{ width: "100%", marginTop: "8rem" }}>
          {headingText && <HeadingWithSocials highLightTxt={headingText} />}
          <section
            style={{
              width: "100%",
              marginTop: "4rem",
              display: "flex",
              justifyContent: "space-between",
              gap: "10rem",
              ...sectionStyleOverrides,
            }}
          >
            {leftContent}
            <div
              style={{
                width: "22%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {rightSidebar}
            </div>
          </section>
        </div>
      </LayoutWrapper>
    </>
  );
}

export default FAQSubPagesLayout;
