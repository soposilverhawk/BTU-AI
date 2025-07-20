import React from "react";
import SectionHeading from "../shared/SectionHeading";
import InfoCard from "../../../Shared/InfoCard/InfoCard";
import { programmesCards } from "../../../../data/home/homeData";

function WomenProgrammes() {
  return (
    <section style={{ marginTop: "100px", display: "flex", flexDirection: "column", gap: "8rem" }}>
      <SectionHeading title="ქალების გაძლიერების პროგრამები" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {programmesCards.map(({ id, cardImg, cardBgColor, txt }) => (
          <InfoCard
            key={id}
            variant="programmes"
            cardImg={cardImg}
            cardTxt={txt}
            bgColor={cardBgColor}
          />
        ))}
      </div>
    </section>
  );
}

export default WomenProgrammes;
