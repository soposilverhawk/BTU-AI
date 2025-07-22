import React from "react";
import { useDesign } from "../../../../context/DesignProvider";

function SectionHeading({
  title,
  isHighlited = false,
  highLightTxt = "",
  borderActive = true,
  width = "60%",
}) {
  const { colors, fontSizes, spacing } = useDesign();
  return (
    <h2
      style={{
        fontSize: fontSizes.heading2,
        fotnWeight: "bold",
        borderBottom: borderActive && `4px solid ${colors.primaryPink}`,
        paddingBottom: spacing.md,
        width: width,
      }}
    >
      {isHighlited && (
        <span style={{ color: colors.primaryPink, marginRight: "0.5rem" }}>
          {highLightTxt}
        </span>
      )}
      {title}
    </h2>
  );
}

export default SectionHeading;
