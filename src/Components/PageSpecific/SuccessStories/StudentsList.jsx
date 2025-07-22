import React from "react";
import { studentAchievements } from "../../../data/successStories/success";

function StudentsList() {
  return (
    <ul style={{listStyleType: "disc"}}>
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
  );
}

export default StudentsList;
