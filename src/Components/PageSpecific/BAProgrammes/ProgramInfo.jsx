import React from "react";
import SectionHeading from "../Home/shared/SectionHeading";
import { AIProgram } from "../../../data/BAPrograms/BAProgram";
import { Typography } from "@mui/material";
import ContactForm from "../../Shared/ContactForm/ContactForm";

function BAProgrammes() {
  return (
    <section
      style={{
        width: "100%",
        marginTop: "8rem",
        height: "2000px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "6rem",
      }}
    >
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
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* program goals container */}
        <div>
          <SectionHeading
            title={null}
            isHighlited={true}
            highLightTxt="პროგრამის მიზნები, ხანგრძლოვბა და კრიტერიუმები"
            borderActive={false}
            width="100%"
          />
          <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }}>
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
        <div
          style={{
            height: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant="body1">
            {AIProgram.additionalInfo.description}
          </Typography>
          <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }}>
            {AIProgram.additionalInfo.internationalPrograms.map(
              ({ id, name, link }) => (
                <li
                  key={id}
                  style={link && { fontWeight: "bold", marginBottom: "0.5rem" }}
                >
                  {link ? <a href={link}>{name}</a> : name}
                </li>
              )
            )}
          </ul>
        </div>
      </article>
      <article style={{ marginTop: "3rem" }}>
        <SectionHeading
          title={null}
          isHighlited={true}
          highLightTxt="დეტალური ინფორმაცია საგნების შესახებ."
          borderActive={false}
        />
        <ul
          style={{
            listStyleType: "disc",
            fontWeight: "bold",
            paddingLeft: "1rem",
            marginTop: "2rem",
          }}
        >
          <li>
            <a href="https://drive.google.com/file/d/1w1sFWQ8Vk0fajmO1VDgMH5nL2cqscnCE/view">
              პროგრამა
            </a>
          </li>
        </ul>
      </article>
      <ContactForm title="თუ ხელოვნური ინტელექტის საბაკალავრო პროგრამით ხართ დაინტერესებული, შეავსეთ ფორმა დამატებითი ინფორმაციისა და სიახლეების მისაღებად" variant="AI-contact"/>
    </section>
  );
}

export default BAProgrammes;
