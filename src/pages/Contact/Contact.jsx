import React from "react";
import HeroStatic from "../../Components/Shared/Hero/HeroStatic/HeroStatic";
import SectionHeading from "../../Components/PageSpecific/Home/shared/SectionHeading";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";
import Socials from "../../Components/Shared/Socials/Socials";

function Contact() {
  return (
    <>
      <HeroStatic heroTitle="კონტაქტი" />
      <LayoutWrapper>
        <section style={{ width: "100%", marginTop: "9rem" }}>
          <div
            style={{
              position: "relative",
            }}
          >
            <SectionHeading
              title=""
              isHighlited={true}
              highLightTxt="საკონტაქტი ინფორმაცია"
              width="100%"
            />
            <Socials variant="innerContent" />
          </div>
        </section>
      </LayoutWrapper>
    </>
  );
}

export default Contact;
