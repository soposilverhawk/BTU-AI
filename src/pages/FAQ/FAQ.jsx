import React from "react";
import HeroStatic from "../../Components/Shared/Hero/HeroStatic/HeroStatic";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";
import { FAQNavigation } from "../../data/shared/shared";
import { Outlet, useNavigate } from "react-router-dom";
import { NavButton } from "../../Components/Global/Header/HeaderMUIRestyle";
import HeadingWithSocials from "../../Components/Shared/HeadingWithSocials/HeadingWithSocials";
import { useDesign } from "../../context/DesignProvider";

function FAQ() {
  const { fontSizes, colors } = useDesign();
  const navigate = useNavigate();
  return (
    <>
      <HeroStatic heroTitle="ხშირად დასმული კითხვები" />
      <LayoutWrapper>
        <div style={{ width: "100%", marginTop: "8rem" }}>
          <section>
            <HeadingWithSocials highLightTxt="FAQ" />
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1.5rem",
                marginTop: "2rem",
              }}
            >
              {FAQNavigation.map(({ id, page, path }) => (
                <NavButton
                  key={id}
                  onClick={() => navigate(path)}
                  sx={{
                    borderLeft: `5px solid ${colors.primaryPink}`,
                    color: colors.primaryBlue,
                    paddingLeft: "2rem",
                  }}
                  disableFocusRipple
                  disableRipple
                >
                  {page}
                </NavButton>
              ))}
            </ul>
          </section>
        </div>
      </LayoutWrapper>
    </>
  );
}

export default FAQ;
