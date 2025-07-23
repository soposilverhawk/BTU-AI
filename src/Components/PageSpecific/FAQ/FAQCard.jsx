import React from "react";
import { useDesign } from "../../../context/DesignProvider";

function FAQCard({ variant, data }) {
  const { colors } = useDesign();
  const variantSmallCard = {
    width: "100%",
    boxShadow: "5px 5px 5px gray",
  };
  const variantBigCard = {
    width: "40%",
    height: "400px",
  };
  const bigCardImg = {
    width: "100%",
    height: "100%",
  };
  return data.map(({ id, img, cardTxt, link }) => (
    <div
      key={id}
      style={variant === "FAQSmallCard" ? variantSmallCard : variantBigCard}
    >
      {/* card img container */}
      <div style={bigCardImg}>
        <img src={img} alt={cardTxt} style={bigCardImg} />
        <p style={{ padding: "1rem", color: colors.primaryPink }}>
          {link !== null ? (
            <a href={link} style={{ color: colors.primaryPink }}>
              {cardTxt}
            </a>
          ) : (
            cardTxt
          )}
        </p>
      </div>
    </div>
  ));
}

export default FAQCard;
