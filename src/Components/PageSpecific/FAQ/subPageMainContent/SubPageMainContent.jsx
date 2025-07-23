import React from "react";
import { Typography } from "@mui/material";
import InfoCard from "../../../Shared/InfoCard/InfoCard";

function SubPageMainContent({ variant, listData }) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "justify",
      }}
    >
      {variant === "labs" && (
        <>
          <Typography variant="body1">
            BTU AI LAB – ხელოვნური ინტელექტის პირველი რეგიონალური ლაბორატორია.
            BTU-ს სტუდენტებს და ნებისმიერ დაინტერესებულ ადამიანს აქვს საშუალება
            მსოფლიოს წამყვან IT კომპანიებთან ითანამშრომლონ და მათთვის საინტერესო
            პროდუქტი განავითარონ.BTU AI LAB თანამშრომლობს ხელოვნური ინტელექტის
            ბიზნესასოციაცია AI Georgia-სთან, რომელიც აქტიურად მუშაობს ქვეყანაში
            ხელოვნური ინტელექტის ეროვნული სტრატეგიის შექმნის, AI-ს ქვეყნის
            სტრატეგიულ სექტორებში და ბიზნესინდუსტრიებში ინტეგრაციის, სამეცნიერო
            კვლევების მხარდაჭერის და ინტერნაციონალიზაციის მიმართულებით.
          </Typography>
          <Typography variant="body1">
            ბიზნესისა და ტექნოლოგიების უნივერსიტეტის AI LAB-ის ბაზაზე მომზადდა:
          </Typography>
        </>
      )}
      {variant !== "knowledge" ? (
        <ul
          style={{
            listStyleType: "disc",
          }}
        >
          {variant === "labs"
            ? listData.map(({ id, project, projectLink }) => (
                <li key={id} style={{marginBottom: "0.5rem"}}>
                  {projectLink !== null ? (
                    <a href={projectLink} target="_blank">
                      {project}
                    </a>
                  ) : (
                    project
                  )}
                </li>
              ))
            : listData.map(({ id, researcher, researchLink }) => (
                <li key={id} style={{marginBottom: "0.5rem"}}>
                  {researcher} -{" "}
                  <a href={researchLink} target="_blank">
                    {researchLink}
                  </a>
                </li>
              ))}
        </ul>
      ) : (
        <InfoCard variant="FAQCardBig" />
        // add other props after creating appropriate data for the cards
      )}
    </article>
  );
}

export default SubPageMainContent;
