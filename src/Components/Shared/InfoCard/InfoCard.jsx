import React from "react";
import { useDesign } from "../../../context/DesignProvider";
import logo from "../../../assets/shared/logo/BTU-logo-secondary.png";
import SuccessCardContent from "./Variants/SuccessCardContent";
import ProgrammesCardContent from "./Variants/ProgrammesCardContent";

function InfoCard({ variant = "", cardImg, cardTxt, bgColor, student }) {
  const { spacing, borderRadius, colors } = useDesign();

  // shared styles
  const baseStyles = {
    width: "280px",
    height: "307px",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
  };
  // variant styles
  const successVariantStyles = {
    background: `url(${cardImg})`,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };
  const programesVariantStyles = {
    backgroundColor: bgColor,
    paddingTop: spacing.sm,
  };

  const FAQCardSmallVariantStyles = {};

  const FAQCardBigVariantStyles = {};

  const appliedStyles =
    variant === "success"
      ? successVariantStyles
      : variant === "FAQCardSmall"
      ? FAQCardSmallVariantStyles
      : variant === "FAQCardBig"
      ? FAQCardBigVariantStyles
      : programesVariantStyles;

  const renderVariantContent = () => {
    switch (variant) {
      case "success":
        return <SuccessCardContent bgColor={bgColor} cardTxt={cardTxt} />;
      case "programes":
        return <ProgrammesCardContent cardImg={cardImg} cardTxt={cardTxt} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        ...baseStyles,
        ...appliedStyles,
      }}
    >
      {renderVariantContent()}
    </div>
  );
}

export default InfoCard;
