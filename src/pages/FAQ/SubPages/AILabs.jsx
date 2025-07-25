import React from "react";
import { AILabProjects } from "../../../data/FAQ/Q&A";
import SubPageMainContent from "../../../Components/PageSpecific/FAQ/subPageMainContent/SubPageMainContent";
import FAQSubPagesLayout from "../../../Components/PageSpecific/FAQ/FAQSubPagesLayout";

export default function AILabs() {
  return (
    <FAQSubPagesLayout
      heroTitle="AI ლაბორატორიები"
      headingText="FAQ / AI ლაბორატორიები"
      leftContent={
        <SubPageMainContent variant="labs" listData={AILabProjects} />
      }
    />
  );
}
