import React from "react";
import { AppBar, Box, Typography, Button } from "@mui/material";
import logo from "../../../assets/shared/BTU-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { socialItems, appNavItems } from "../../../data/shared/shared";
import { useDesign } from "../../../context/DesignProvider";
import { ToolbarTop, ToolbarBottom, NavButton } from "./HeaderMUIRestyle";

export default function Header() {
  const { colors, spacing } = useDesign();
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      color="primary"
      elevation={2}
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
        height: "146px",
      }}
    >
      <ToolbarTop $colors={colors}>
        <Box>
          <Typography>
            <span style={{ color: colors.primaryPink }}>BTU AI4Globe</span>{" "}
            საქართველოდან მთელს მსოფლიოში,{" "}
            <span style={{ color: colors.primaryPink }}>AI</span> წიგნიერების
            გასაძლიერებლად
          </Typography>
        </Box>
        <ul style={{ display: "flex", alignItems: "center", gap: spacing.xs }}>
          {socialItems.map(({ name, id, icon, target, smLink }) => (
            <li key={id}>
              <a href={smLink} target={target}>
                <img src={icon} alt={name} />
              </a>
            </li>
          ))}
        </ul>
      </ToolbarTop>
      <ToolbarBottom>
        <Link to="/">
          <img src={logo} alt="BTU-AI logo" />
        </Link>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {appNavItems.map(({ id, page, path }) => (
            <NavButton key={id} onClick={() => navigate(path)}>
              {page}
            </NavButton>
          ))}
        </Box>
      </ToolbarBottom>
    </AppBar>
  );
}
