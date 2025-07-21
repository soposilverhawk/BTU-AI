import React from "react";
import { useDesign } from "../../../../context/DesignProvider";
import heroImg from "../../../../assets/homePage/cards/success/success-card-2.png";
import LayoutWrapper from "../../../Global/LayoutWrapper/LayoutWrapper";

function HeroStatic({ heroTitle }) {
  const { colors, fontSizes } = useDesign();
  return (
    <section
      style={{
        height: "180px",
        background: `${colors.heroGradient}, url(${heroImg})`,
        display: "flex",
        alignItems: "center"
      }}
    >
      <LayoutWrapper>
        <h1
          style={{
            fontSize: fontSizes.heading1,
            paddingLeft: "3rem",
            borderLeft: `5px solid ${colors.primaryPink}`,
            color: "#fff",
            height: "100px",
            display: "flex",
            alignItems: "center"
          }}
        >
          {heroTitle}
        </h1>
      </LayoutWrapper>
    </section>
  );
}

export default HeroStatic;
