import React from "react";
import { useDesign } from "../../../context/DesignProvider";
import logo from "../../../assets/shared/logo/BTU-logo-secondary.png";

function InfoCard({ variant = "", cardImg, cardTxt, bgColor }) {
  const { spacing } = useDesign();
  return (
    <div
      style={{
        width: "280px",
        height: "307px",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        ...(variant === "success"
          ? {
              background: `url(${cardImg})`,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }
          : {
              backgroundColor: bgColor,
              paddingTop: spacing.sm,
            }),
      }}
    >
      {variant === "success" ? (
        <>
          <div
            style={{
              zIndex: 9000,
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="BTU logo" />
            <h3
              style={{
                backgroundColor: bgColor,
                padding: spacing.sm,
              }}
            >
              {cardTxt}
            </h3>
          </div>
          {/* card overlay */}
          <div
            style={{
              backgroundColor: "#0000008C",
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            }}
          ></div>
        </>
      ) : (
        <>
          <img src={cardImg} alt={cardTxt} />
          <p style={{ marginTop: "2rem" }}>{cardTxt}</p>
        </>
      )}
    </div>
  );
}

export default InfoCard;
