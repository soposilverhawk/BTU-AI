import React from "react";
import HeroStatic from "../../Components/Shared/Hero/HeroStatic/HeroStatic";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";
import { FAQNavigation } from "../../data/shared/shared";
import { FAQnAnswers } from "../../data/FAQ/Q&A";
import HeadingWithSocials from "../../Components/Shared/HeadingWithSocials/HeadingWithSocials";
import SectionHeading from "../../Components/PageSpecific/Home/shared/SectionHeading";
import FAQLists from "../../Components/PageSpecific/FAQ/FAQLists";

function FAQ() {
  return (
    <>
      <HeroStatic heroTitle="ხშირად დასმული კითხვები" />
      <LayoutWrapper>
        <div style={{ width: "100%", marginTop: "8rem" }}>
          <section>
            <HeadingWithSocials highLightTxt="FAQ" />
            <FAQLists data={FAQNavigation} variant="subNavigation"/>
          </section>
          <section style={{marginTop: "10rem"}}>
            <SectionHeading
              title=""
              isHighlited={true}
              highLightTxt="გაიგე სწრაფად"
              width="100%"
            />
            <FAQLists data={FAQnAnswers} variant="FAQ"/>
          </section>
        </div>
      </LayoutWrapper>
    </>
  );
}

export default FAQ;
