import React from "react";
import { NavButton } from "../../Global/Header/HeaderMUIRestyle";
import { useDesign } from "../../../context/DesignProvider";
import { useNavigate } from "react-router-dom";

function FAQLists({ data, variant = "subNavigation" }) {
  const navigate = useNavigate();
  const { colors, fontSizes } = useDesign();

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
    paddingLeft: "2rem",
    fontSize: fontSizes.heading3,
  };

  //   FAQ styles
  const FAQBase = {
    width: "100%",
    height: "45px",
    transition: "height 0.3s ease-in",
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
    <div>
      {data.map(({ id, question, answer }) => (
        <div key={id} style={FAQBase}>
          {/* QnA heading */}
          <div style={listItemBase}>
            {question}
            <DropDownToggler />
          </div>
          {/* QnA body */}
          <div>{answer}</div>
        </div>
      ))}
    </div>
  );
}

export default FAQLists;
