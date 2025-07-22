import React from "react";

function ProgrammesCardContent({ cardImg, cardTxt }) {
  return (
    <>
      <img src={cardImg} alt={cardTxt} />
      <p style={{ marginTop: "2rem" }}>{cardTxt}</p>
    </>
  );
}

export default ProgrammesCardContent;
