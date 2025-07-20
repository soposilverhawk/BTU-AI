import React from "react";
import SectionHeading from "../shared/SectionHeading";
import InfoCard from "../../../Shared/InfoCard/InfoCard";
import { successStoriesCards } from "../../../../data/home/homeData";



function SuccessStories() {
  return (
    <section style={{display: "flex", flexDirection: "column", gap: "8rem"}}>
      <SectionHeading title="წარმატების ისტორიები" />
      <div style={{display: "flex", justifyContent: "space-between"}}>
        {successStoriesCards.map(({id, title, titleBg, cardImg}) => (
          <InfoCard key={id} variant="success" cardTxt={title} bgColor={titleBg} cardImg={cardImg}/>
        ))}
      </div>
    </section>
  );
}

export default SuccessStories;
