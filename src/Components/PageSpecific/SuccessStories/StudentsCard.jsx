import React from "react";
import { studentCards } from "../../../data/successStories/success";
import { useDesign } from "../../../context/DesignProvider";

function StudentsCard() {
  const { colors, borderRadius } = useDesign();
  return studentCards.slice(0, 4).map(({ id, student, studentImg }) => (
    // card container
    <div
      key={id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "45%",
        height: "250px",
        position: "relative",
        backgroundColor: colors.primaryPink,
        borderRadius: "20px",
      }}
    >
      {/* info container */}
      <div
        style={{
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "2rem 1rem",
        }}
        // fix the styling for it to overlap with imgs later and have a diagonal borderRight
      >
        <h3>პროგრამა - WOMEN IN AI</h3>
        <p>წარმატებული სტუდენტი {student}</p>
      </div>
      {/* student img container */}
      <div style={{ height: "100%" }}>
        <img
          src={studentImg}
          alt={`${student} image`}
          style={{ height: "100%" }}
        />
      </div>
    </div>
  ));
}

export default StudentsCard;
