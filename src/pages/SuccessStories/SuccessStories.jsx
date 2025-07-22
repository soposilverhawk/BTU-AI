import React, { useState } from "react";
import HeroStatic from "../../Components/Shared/Hero/HeroStatic/HeroStatic";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";
import "../../Components/PageSpecific/SuccessStories/StudentsList";
import StudentsList from "../../Components/PageSpecific/SuccessStories/StudentsList";
import StudentsCard from "../../Components/PageSpecific/SuccessStories/StudentsCard";
import SectionHeading from "../../Components/PageSpecific/Home/shared/SectionHeading";
import Button from "../../Components/Shared/Button/Button";
import { useDesign } from "../../context/DesignProvider";
import { studentCards } from "../../data/successStories/success";

function SuccessStories() {
  const { colors } = useDesign();
  const [endIdx, setEndIdx] = useState(4);
  let step = 2;
  const handleClick = () => {
    if(endIdx !== studentCards.length) {
      setEndIdx((prev) => prev + step)
    }
  }
  return (
    <>
      <HeroStatic heroTitle="წარმატების ისტორიები" />
      <LayoutWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
          }}
        >
          <section
            style={{
              marginBottom: "5rem",
              padding: "4rem 3rem",
              boxShadow: "3px 5px 2px lightgray",
              display: "flex",
              flexDirection: "column",
              gap: "5rem",
              alignItems: "flex-start",
              borderRadius: "20px",
            }}
          >
            <SectionHeading
              title=""
              isHighlited={true}
              highLightTxt="WOMEN IN AI პროგრამის სტუდენტები"
              borderActive={false}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <StudentsCard studentsData={studentCards} rangeEndIdx={endIdx} />
            </div>
            <Button variant="button" onClick={handleClick}>
              <span style={{ color: colors.primaryPink }}>
                გაიცანი ყველა წარმატებული სტუდენტი...
              </span>
            </Button>
          </section>
          <StudentsList />
        </div>
      </LayoutWrapper>
    </>
  );
}

export default SuccessStories;
