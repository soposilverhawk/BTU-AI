import React from "react";
import { socialItems } from "../../../data/shared/shared";
import { useDesign } from "../../../context/DesignProvider";

function Socials({ variant }) {
  const { colors, spacing } = useDesign();
  const baseStyles = {
    display: "flex",
    alignItems: "center",
    gap: spacing.xs,
  };
  const variantStyles = {
    padding: "0.2rem 0.5rem",
    backgroundColor: colors.primaryPink,
    position: "absolute",
    right: 0,
    top: 0,
  };
  const appliedStyles = variant === "innerContent" && variantStyles;

  return (
    <ul style={{ ...baseStyles, ...appliedStyles }}>
      {socialItems.map(({ name, id, icon, smLink }) => (
        <li key={id}>
          <a href={smLink} target="_blank">
            <img src={icon} alt={name} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
