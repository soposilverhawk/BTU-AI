import React from "react";
import HeroStatic from "../../Components/Shared/Hero/HeroStatic/HeroStatic";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";
import BAProgramme from "../../Components/PageSpecific/BAProgrammes/ProgramInfo";

function BAProgrammes() {
  return (
    <>
      <HeroStatic heroTitle="AI საბაკალავრო პროგრამა" />
      <LayoutWrapper>
        <BAProgramme />
      </LayoutWrapper>
    </>
  );
}

export default BAProgrammes;
