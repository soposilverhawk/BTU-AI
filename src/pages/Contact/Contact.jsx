import React from "react";
import HeroStatic from "../../Components/Shared/Hero/HeroStatic/HeroStatic";
import SectionHeading from "../../Components/PageSpecific/Home/shared/SectionHeading";
import LayoutWrapper from "../../Components/Global/LayoutWrapper/LayoutWrapper";
import Socials from "../../Components/Shared/Socials/Socials";
import { useDesign } from "../../context/DesignProvider";
import ContactEntity from "../../Components/PageSpecific/Contact/ContactEntity";
import ContactForm from "../../Components/Shared/ContactForm/ContactForm";
import HeadingWithSocials from "../../Components/Shared/HeadingWithSocials/HeadingWithSocials";

function Contact() {
  const { colors } = useDesign();
  return (
    <>
      <HeroStatic heroTitle="კონტაქტი" />
      <LayoutWrapper>
        {/* content wrapper */}
        <div style={{ width: "100%" }}>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              height: "1200px",
              justifyContent: "space-between",
              marginTop: "9rem",
            }}
          >
            {/* section heading container */}
           <HeadingWithSocials />
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
            {/* map container */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.178740010314!2d44.73783800485907!3d41.70640403518284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447344e8047ced%3A0xb53d8ecd4495903f!2sBusiness%20and%20Technology%20University!5e0!3m2!1sen!2sge!4v1753212189701!5m2!1sen!2sge"
              width="100%"
              height="800"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
          <section style={{ marginTop: "14rem", display: "flex", flexDirection: "column" ,gap: "4rem" }}>
            <SectionHeading
              title=""
              isHighlited={true}
              highLightTxt="მოგვწერე"
              width="100%"
            />
            <ContactForm
              variant="basic-contact"
              title="თუ გსურს დამატებით ინფორმაციის მიღება, შეავსე ფორმა"
            />
          </section>
        </div>
      </LayoutWrapper>
    </>
  );
}

export default Contact;
