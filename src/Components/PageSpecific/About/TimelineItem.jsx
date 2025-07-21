import React from "react";
import { useDesign } from "../../../context/DesignProvider";

function TimelineItem({ principlesData }) {
  const { colors, borderRadius, fontSizes } = useDesign();
  const timelineContainerBase = {
    display: "flex",
    flexDirection: "column",
    gap: "35px",
  };
  return (
    <div
      style={{
        ...timelineContainerBase,
      }}
    >
      {principlesData.map((_, idx) => (
        <div
          key={idx + 1}
          style={{
            backgroundColor: "transparent",
            width: "80px",
            height: "80px",
            border: `3px solid ${colors.primaryBlue}`,
            borderRadius: borderRadius.btnCircle,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: fontSizes.heading3
          }}
        >
          {idx + 1}
        </div>
      ))}
    </div>
  );
}

export default TimelineItem;
