import React from "react";
import SectionHeading from "../shared/SectionHeading";
import InfoCard from "../../../Shared/InfoCard/InfoCard";

function InfoCardSection({ title, data, variant }) {
  return (
    <section
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        gap: "8rem",
      }}
    >
      <SectionHeading title={title} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {data.map((item) => (
          <InfoCard
            key={item.id}
            variant={variant}
            cardImg={item.cardImg}
            cardTxt={item.title || item.txt}
            bgColor={item.titleBg || item.cardBgColor}
          />
        ))}
      </div>
    </section>
  );
}

export default InfoCardSection;
