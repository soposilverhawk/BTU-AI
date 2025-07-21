import React from "react";
import SectionHeading from "../../PageSpecific/Home/shared/SectionHeading";
import { Typography } from "@mui/material";

function ItemDescription({ principlesData }) {
  const descriptionsContainerBase = {
    display: "flex",
    flexDirection: "column",
    gap: "35px",
  };
  return (
    <div style={{ ...descriptionsContainerBase }}>
      {principlesData.map(
        ({ id, titleHighlight, titleCore, principleDesc }) => (
          <React.Fragment key={id}>
            <SectionHeading
              title={titleCore}
              isHighlited={true}
              highLightTxt={titleHighlight}
              borderActive={false}
            />
            <Typography variant="body1">{principleDesc}</Typography>
          </React.Fragment>
        )
      )}
    </div>
  );
}

export default ItemDescription;
