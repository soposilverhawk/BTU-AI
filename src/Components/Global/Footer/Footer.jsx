import React from "react";
import { useDesign } from "../../../context/DesignProvider";
import logo from "../../../assets/shared/logo/BTU-logo-secondary.png";
import { contactInfo } from "../../../data/shared/shared";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContactPopup from "../ContactPopup/ContactPopup";

function Footer() {
  const { colors, spacing } = useDesign();
  return (
    <footer
      style={{
        marginTop: "14rem",
        height: "261px",
        backgroundColor: colors.secondaryGray,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "5rem",
        position: "relative"
      }}
    >
      {/* footer - top */}
      <LayoutWrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8rem",
        }}
      >
        <img src={logo} alt="BTU logo" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <p>
            ბიზნესისა და ტექნოლოგიების უნივერსიტეტი 2016 წლის 16 სექტემბერს
            დაარსდა.
          </p>
          <ul style={{ listStyleType: "disc" }}>
            {contactInfo.map((info, id) => (
              <li key={id}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
      </LayoutWrapper>
      {/* footer - copyright */}
      <div
        style={{
          backgroundColor: "#D9D9D9",
          padding: spacing.md,
          color: "#000",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center"
        }}
      >
        Copyright © 2024 - BTUSTUDENTS
      </div>
      <ContactPopup />
    </footer>
  );
}

export default Footer;
