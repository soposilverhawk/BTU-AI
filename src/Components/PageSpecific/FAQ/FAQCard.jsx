import React from "react";
import { useDesign } from "../../../context/DesignProvider";

function FAQCard({ variant, data }) {
  const { colors } = useDesign();
  const variantSmallCard = {
    width: "100%",
    boxShadow: "5px 5px 5px gray",
  };
  const variantBigCard = {
    width: "45%",
  };
  return data.map(({ id, img, cardTxt, link }) => (
    <div key={id}>
      {/* card img container */}
      <div
        style={variant === "FAQSmallCard" ? variantSmallCard : variantBigCard}
      >
        <img src={img} alt={cardTxt} />
        <p style={{ padding: "1rem" }}>
          {link !== null ? <a href={link} style={{color: colors.primaryPink}}>{cardTxt}</a> : { cardTxt }}
        </p>
      </div>
    </div>
  ));
}

export default FAQCard;
