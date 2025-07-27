import React from "react";
import { contactMethods } from "../../../data/contact/contactMethods";
import { useDesign } from "../../../context/DesignProvider";

function ContactEntity({ variant }) {
  const { colors } = useDesign();
  const entity = contactMethods[variant];
  return (
    <address style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <img src={entity.icon} alt={entity.label} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
      >
        <h4 style={{ color: colors.primaryPink }}>{entity.label}</h4>
        <p>{entity.value}</p>
        {entity.extra && <p>{entity.extra}</p>}
      </div>
    </address>
  );
}

export default ContactEntity;
