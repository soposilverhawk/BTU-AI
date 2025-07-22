import React from "react";
import HeroStatic from "../../Components/Shared/Hero/HeroStatic/HeroStatic";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";
import "../../Components/PageSpecific/SuccessStories/StudentsList";
import StudentsList from "../../Components/PageSpecific/SuccessStories/StudentsList";

function SuccessStories() {
  return (
    <>
      <HeroStatic heroTitle="წარმატების ისტორიები" />
      <LayoutWrapper>
        <StudentsList />
      </LayoutWrapper>
    </>
  );
}

export default SuccessStories;
