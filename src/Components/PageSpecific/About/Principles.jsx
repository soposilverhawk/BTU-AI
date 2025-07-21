import React from "react";
import { btuPrinciples } from "../../../data/about/about";
import { useDesign } from "../../../context/DesignProvider";
import SectionHeading from "../../PageSpecific/Home/shared/SectionHeading";
import { Typography } from "@mui/material";

function Principles() {
  const { colors, borderRadius, fontSizes } = useDesign();

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        position: "relative",
        maxWidth: "1245px",
        width: "100%",
        marginTop: "9rem"
      }}
    >
      {btuPrinciples.map(
        ({ id, titleHighlight, titleCore, principleDesc }, idx) => {
          const isLast = idx === btuPrinciples.length - 1;

          return (
            <div
              key={id}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "24px",
                position: "relative",
              }}
            >
              {/* Numbered Circle + Line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "4px", // aligns vertically with heading
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    border: `3px solid ${colors.primaryBlue}`,
                    borderRadius: borderRadius.btnCircle,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: fontSizes.heading3,
                    backgroundColor: "#fff",
                    color: colors.primaryBlue,
                  }}
                >
                  {idx + 1}
                </div>

                {!isLast && (
                  <div
                    style={{
                      width: "3px",
                      height: "200px",
                      backgroundColor: colors.primaryBlue,
                      marginTop: "31px",
                    }}
                  />
                )}
              </div>

              {/* Textual Content */}
              <div style={{display: "flex", flexDirection: "column", gap: "25px"}}>
                <SectionHeading
                  title={titleCore}
                  isHighlited={true}
                  highLightTxt={titleHighlight}
                  borderActive={false}
                />
                <Typography variant="body1">{principleDesc}</Typography>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
}

export default Principles;
