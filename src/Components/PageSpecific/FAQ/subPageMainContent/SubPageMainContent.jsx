import React from "react";
import { Typography } from "@mui/material";
import InfoCard from "../../../Shared/InfoCard/InfoCard";

function SubPageMainContent({ variant, listData }) {
  return (
    <article>
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
        <ul>
          {variant === "labs"
            ? listData.map(({ id, project, projectLink }) => (
                <li key={id}>
                  <a href={projectLink} target="_blank">
                    {project}
                  </a>
                </li>
              ))
            : listData.map(({ id, researcher, researchLink }) => (
                <li key={id}>
                  {researcher} - <a href={researchLink} target="_blank"></a>
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
