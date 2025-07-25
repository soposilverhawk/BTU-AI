import React from "react";
import SubPageMainContent from "../../../Components/PageSpecific/FAQ/subPageMainContent/SubPageMainContent";
import { AIResearches } from "../../../data/FAQ/Q&A";
import FAQSubPagesLayout from "../../../Components/PageSpecific/FAQ/FAQSubPagesLayout";

function AIStudies() {
  return (
    <FAQSubPagesLayout
      heroTitle="AI კვლევები"
      headingText="FAQ / AI კვლევები"
      leftContent={
        <SubPageMainContent variant="research" listData={AIResearches} />
      }
    />
  );
}

export default AIStudies;
