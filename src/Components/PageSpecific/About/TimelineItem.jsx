import React from "react";
import { useDesign } from "../../../context/DesignProvider";

function TimelineItem({ principlesData }) {
  const { colors, borderRadius } = useDesign();
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
            border:
              idx !== principlesData.length - 1 &&
              `3px solid ${colors.primaryBlue}`,
            borderRadius: borderRadius.btnCircle,
          }}
        >
          {idx + 1}
        </div>
      ))}
    </div>
  );
}

export default TimelineItem;
