import React from "react";
import SectionHeading from "../../PageSpecific/Home/shared/SectionHeading";
import Socials from "../Socials/Socials";

function HeadingWithSocials() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <SectionHeading
        title=""
        isHighlited={true}
        highLightTxt="საკონტაქტი ინფორმაცია"
        width="100%"
      />
      <Socials variant="innerContent" />
    </div>
  );
}

export default HeadingWithSocials;
