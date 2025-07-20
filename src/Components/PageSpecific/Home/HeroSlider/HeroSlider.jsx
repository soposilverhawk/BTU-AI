import React, { useState } from "react";
import logo from "../../../../assets/shared/logo/BTU-logo-secondary.png";
import { sliderInfo } from "../../../../data/home/homeData";
import { useDesign } from "../../../../context/DesignProvider";
import HeroSliderControls from "./HeroSliderControls";

function HeroSlider() {
  const { fontSizes } = useDesign();
  const [sliderCount, setSliderCount] = useState(0);
  const currentSlide = sliderInfo[sliderCount];

  const getNextSlide = () => {
    if (sliderCount < sliderInfo.length - 1) {
      setSliderCount((prev) => prev + 1);
      console.log(sliderCount);
    }
  };
  const getPrevSlide = () => {
    if (sliderCount > 0) {
      setSliderCount((prev) => prev - 1);
      console.log(sliderCount);
    }
  };
  return (
    <section
      style={{
        background: `url(${currentSlide.bg})`,
        height: "500px",
        position: "relative",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundPosition: "center",
        transition: "all 0.5s ease-in",
      }}
    >
      {/* background overlay: */}
      <div
        style={{
          backgroundColor: "#780B4196",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      ></div>

      {/* slider content: */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "90%",
          width: "100%",
        }}
      >
        <HeroSliderControls variant="previous" handleClick={getPrevSlide} />
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            zIndex: 9000,
          }}
        >
          <h1
            style={{
              fontSize: fontSizes.heading1,
              color: "#000",
              backgroundColor: "#fff",
              padding: "20px",
              textTransform: "uppercase",
            }}
          >
            {currentSlide.title}
          </h1>
          <p
            style={{
              fontSize: fontSizes.heading1,
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
              width: "80%",
            }}
          >
            {currentSlide.txt}
          </p>
          <img src={logo} alt="BTU logo" style={{ width: 100, height: 125 }} />
        </div>
        <HeroSliderControls variant="next" handleClick={getNextSlide} />
      </div>
    </section>
  );
}

export default HeroSlider;
