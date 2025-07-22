import React from "react";
import HeroStatic from "../../Components/Shared/Hero/HeroStatic/HeroStatic";
import SectionHeading from "../../Components/PageSpecific/Home/shared/SectionHeading";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";
import Socials from "../../Components/Shared/Socials/Socials";
import { useDesign } from "../../context/DesignProvider";
import ContactEntity from "../../Components/PageSpecific/Contact/ContactEntity";

function Contact() {
  const { colors } = useDesign();
  return (
    <>
      <HeroStatic heroTitle="კონტაქტი" />
      <LayoutWrapper>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            height: "1200px",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "9rem",
          }}
        >
          {/* section heading container */}
          <div
            style={{
              position: "relative",
            }}
          >
            <SectionHeading
              title=""
              isHighlited={true}
              highLightTxt="საკონტაქტი ინფორმაცია"
              width="100%"
            />
            <Socials variant="innerContent" />
          </div>
          {/* section information container */}
          <div>
            <h3 style={{ color: colors.primaryBlue, marginBottom: "2rem" }}>
              ცხელი ხაზის სამუშაო საათებია ორშაბათიდან პარასკევის ჩათვლით
              10:00-18:00 საათამდე.
            </h3>
            {/* contact info container */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                width: "80%",
                gap: "2rem",
              }}
            >
              <ContactEntity variant="phone" />
              <ContactEntity variant="location" />
              <ContactEntity variant="email" />
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  );
}

export default Contact;
