import React from "react";
import SectionHeading from "../Home/shared/SectionHeading";
import { AIProgram } from "../../../data/BAPrograms/BAProgram";
import { Typography } from "@mui/material";

function BAProgrammes() {
  return (
    <section style={{ width: "100%", marginTop: "8rem" }}>
      <article>
        <SectionHeading
          title={AIProgram.programOverview.degree}
          isHighlited={true}
          highLightTxt={AIProgram.programOverview.name}
          borderActive={false}
        />
        <ul style={{ listStyleType: "disc", margin: "30px" }}>
          {AIProgram.programOverview.opportunities.map((opportunity, idx) => (
            <li key={idx}>{opportunity}</li>
          ))}
        </ul>
        <Typography variant="body1">
          {AIProgram.programOverview.generalInfo}
        </Typography>
      </article>
      <article>
        {/* program goals container */}
        <div>
          <SectionHeading
            title={null}
            isHighlited={true}
            highLightTxt="პროგრამის მიზნები, ხანგრძლოვბა და კრიტერიუმები"
            borderActive={false}
            width="100%"
          />
          <ul style={{ listStyleType: "disc" }}>
            {AIProgram.programDetails.map(({ id, label, labelDescription }) => (
              <li key={id} style={{ fontWeight: "bold" }}>
                {label} {labelDescription}
              </li>
            ))}
          </ul>
        </div>
        {/* program objectives container */}
        <div>
          <Typography variant="body1">{AIProgram.objectives}</Typography>
        </div>
        {/* program additional info container */}
        <div>
          <Typography variant="body1">{AIProgram.additionalInfo.description}</Typography>
          <ul style={{listStyleType: "disc"}}>
            {AIProgram.additionalInfo.internationalPrograms.map(({id, name, link}) => (
              <li key={id} style={link && {fontWeight: "bold"}}>
                {link ? <a href={link}>{name}</a> : name}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}

export default BAProgrammes;
