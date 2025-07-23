import React from "react";
import HeroStatic from "../../../Components/Shared/Hero/HeroStatic/HeroStatic";
import HeadingWithSocials from "../../../Components/Shared/HeadingWithSocials/HeadingWithSocials";
import LayoutWrapper from "../../../Components/Global/LayoutWrapper/LayoutWrapper";
import { AILabProjects } from "../../../data/FAQ/Q&A";
import SubPageMainContent from "../../../Components/PageSpecific/FAQ/subPageMainContent/SubPageMainContent";

function AILabs() {
  return (
    <>
      <HeroStatic heroTitle="AI ლაბორატორიები" />;
      <LayoutWrapper>
        <div style={{ width: "100%", marginTop: "8rem" }}>
          <HeadingWithSocials highLightTxt="FAQ / AI ლაბორატორიები" />
          <section style={{ marginTop: "4rem" }}>
            <SubPageMainContent variant="labs" listData={AILabProjects} />
            <div></div>
          </section>
        </div>
      </LayoutWrapper>
    </>
  );
}

export default AILabs;
