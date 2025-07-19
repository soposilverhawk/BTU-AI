import React from "react";
import { Box } from "@mui/material";

function LayoutWrapper({ children }) {
  return <Box sx={{ margin: "0 11rem", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>{children}</Box>;
}

export default LayoutWrapper;
