import React from "react";
import { studentAchievements } from "../../../data/successStories/success";
import SectionHeading from "../Home/shared/SectionHeading";

function StudentsList() {
  return (
    <section style={{marginTop: "2rem"}}>
      <SectionHeading
        title=""
        isHighlited={true}
        highLightTxt="კომპიუტერული მეცნიერებისა და ხელოვნური ინტელექტის ფაკულტეტის კურსდამთავრებულთა წარმატება"
        borderActive={false}
        width="100%"
      />
      <ul style={{listStyleType: "disc", marginTop: "5rem"}}>
      {studentAchievements.map(({ id, student, position, company, linkedIn }) => (
        <li key={id}>
          <a href={linkedIn} target="_blank">
            {student} -
            <strong style={{ fontWeight: "bold" }}>
              {position} | {company}
            </strong>
          </a>
        </li>
      ))}
    </ul>
    </section>
  );
}

export default StudentsList;
