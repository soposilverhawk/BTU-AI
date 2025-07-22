import React from "react";
import SectionHeading from "../../PageSpecific/Home/shared/SectionHeading";
import Socials from "../Socials/Socials";

function HeadingWithSocials({highLightTxt}) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <SectionHeading
        title=""
        isHighlited={true}
        highLightTxt={highLightTxt}
        width="100%"
      />
      <Socials variant="innerContent" />
    </div>
  );
}

export default HeadingWithSocials;
