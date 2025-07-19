import React, { useState } from "react";
import sliderControlPrev from "../../../../assets/slider/slider-control-prev.png";
import sliderControlNext from "../../../../assets/slider/slider-control-next.png";

function HeroSliderControls({ variant, handleClick }) {
  const controlType = variant === "previous" ? "previous" : "next";
  return (
    <button
      style={{
        background: "transparent",
        border: "none",
        zIndex: 9000,
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <img
        src={controlType === "previous" ? sliderControlPrev : sliderControlNext}
        alt={controlType}
      />
    </button>
  );
}

export default HeroSliderControls;
