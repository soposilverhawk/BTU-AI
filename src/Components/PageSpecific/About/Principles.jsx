import React from "react";
import { btuPrinciples } from "../../../data/about/about";
import ItemDescription from "./ItemDescription";
import TimelineItem from "./TimelineItem";

function Principles() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <TimelineItem principlesData={btuPrinciples} />
      <ItemDescription principlesData={btuPrinciples} />
    </section>
  );
}

export default Principles;
