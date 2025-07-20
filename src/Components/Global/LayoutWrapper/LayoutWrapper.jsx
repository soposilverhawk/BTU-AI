import React from "react";
import { Box } from "@mui/material";

function LayoutWrapper({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      {children}
    </Box>
  );
}

export default LayoutWrapper;
