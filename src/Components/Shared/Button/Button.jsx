import React from "react";
import submitIcon from "../../../assets/shared/submit-icon.png";
import { useDesign } from "../../../context/DesignProvider";

function Button({ children = "", variant = "", onClick }) {
  const { colors, spacing, borderRadius, fontSizes } = useDesign();

  const baseStyles = {
    display: "flex",
    alignItems: "center",
    fontSize: fontSizes.text,
    cursor: "pointer",
    gap: spacing.md,
    color: "#fff"
  };

  const buttonType =
    variant === "formSubmit" || variant === "chatSubmit" ? "submit" : "button";

  const variantStyles =
    variant === "formSubmit"
      ? {
          backgroundColor: colors.primaryPink,
          borderRadius: borderRadius.btnRect,
          padding: "10px 20px",
          border: "none",
        }
      : variant === "chatSubmit"
      ? {
          backgroundColor: "transparent",
          border: "1px solid #fff",
          borderRadius: borderRadius.btnCircle,
          padding: spacing.sm
        }
      : {};

  return (
    <button
      onClick={buttonType === "formSubmit" || buttonType === "chatSubmit" ? null : onClick }
      type={buttonType}
      style={{ ...baseStyles, ...variantStyles }}
    >
      {children ? children : ""}
      {buttonType === "submit" && <img src={submitIcon} alt="submit" />}
    </button>
  );
}

export default Button;
