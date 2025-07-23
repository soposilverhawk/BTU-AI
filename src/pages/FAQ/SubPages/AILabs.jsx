import React from "react";
import HeroStatic from "../../../Components/Shared/Hero/HeroStatic/HeroStatic";
import HeadingWithSocials from "../../../Components/Shared/HeadingWithSocials/HeadingWithSocials";
import LayoutWrapper from "../../../Components/Global/LayoutWrapper/LayoutWrapper";

function AILabs() {
  return (
    <>
      <HeroStatic heroTitle="AI ლაბორატორიები" />;
      <LayoutWrapper>
        <div style={{ width: "100%", marginTop: "8rem" }}>
          <HeadingWithSocials highLightTxt="FAQ / AI ლაბორატორიები" />
          <section>
            {/* cards container */}
            <div></div>
          </section>
        </div>
      </LayoutWrapper>
    </>
  );
}

export default AILabs;
