import React, { useState } from "react";
import { NavButton } from "../../Global/Header/HeaderMUIRestyle";
import { useDesign } from "../../../context/DesignProvider";
import { useNavigate } from "react-router-dom";
import DropDownToggler from "./DropDownToggler/DropDownToggler";

function FAQLists({ data, variant = "subNavigation" }) {
  const [isFAQExpanded, setIsFAQExpanded] = useState(null);
  const navigate = useNavigate();
  const { colors, fontSizes } = useDesign();

  const toggleFAQState = (FAQId) => {
    setIsFAQExpanded((prevId) => (prevId === FAQId ? null : FAQId));
    console.log(isFAQExpanded);
  };

  //   navigation styles
  const listBase = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.5rem",
    marginTop: "2rem",
  };
  const listItemBase = {
    borderLeft: `5px solid ${colors.primaryPink}`,
    fontSize: fontSizes.heading3,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  //   FAQ styles
  const FAQBase = {
    width: "100%",
    height: "45px",
    transition: "height 0.3s ease-in",
    padding: "2rem 0",
  };

  const FAQExpanded = {
    height: "100px",
  };

  return variant === "subNavigation" ? (
    <ul style={listBase}>
      {data.map(({ id, page, path }) => (
        <li key={id} style={listItemBase}>
          <NavButton
            disableFocusRipple
            disableRipple
            onClick={() => navigate(path)}
            sx={{ color: colors.primaryBlue, fontSize: fontSizes.heading3 }}
          >
            {page}
          </NavButton>
        </li>
      ))}
    </ul>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: colors.primaryBlue,
      }}
    >
      {data.map(({ id, question, answer }, itemIdx) => (
        <div
          key={id}
          style={{
            ...FAQBase,
            ...(isFAQExpanded === id &&
              itemIdx !== data.length - 1 &&
              FAQExpanded),
          }}
        >
          {/* QnA heading */}
          <div style={{ ...listItemBase, padding: "1rem 2rem" }}>
            {question}
            <DropDownToggler
              isFAQExpanded={isFAQExpanded === id}
              toggleFAQState={() => toggleFAQState(id)}
            />
          </div>
          {/* QnA body */}
          {isFAQExpanded === id && (
            <div
              style={{
                padding: "1rem",
                color: "gray",
                width: "90%",
              }}
            >
              {answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQLists;
