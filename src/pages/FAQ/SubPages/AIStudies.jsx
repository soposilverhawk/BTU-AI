import React from "react";
import HeroStatic from "../../../Components/Shared/Hero/HeroStatic/HeroStatic";
import LayoutWrapper from "../../../Components/Global/LayoutWrapper/LayoutWrapper";
import HeadingWithSocials from "../../../Components/Shared/HeadingWithSocials/HeadingWithSocials";
import SubPageMainContent from "../../../Components/PageSpecific/FAQ/subPageMainContent/SubPageMainContent";
import { AIResearches } from "../../../data/FAQ/Q&A";

function AIKnowledge() {
  return (
     <>
      <HeroStatic heroTitle="AI ლაბორატორიები" />;
      <LayoutWrapper>
        <div style={{ width: "100%", marginTop: "8rem" }}>
          <HeadingWithSocials highLightTxt="FAQ / AI კვლევები" />
          <section style={{ marginTop: "4rem", height: "840px" }}>
            <SubPageMainContent variant="research" listData={AIResearches} />
            <div></div>
          </section>
        </div>
      </LayoutWrapper>
    </>
  )
}

export default AIKnowledge;
