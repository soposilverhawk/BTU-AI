import { Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ToolbarTop = styled(Toolbar, {
  shouldForwardProp: (prop) => prop !== '$colors',
})(({ $colors }) => ({
  backgroundColor: $colors.secondaryGray,
}));

export const ToolbarBottom = styled(Toolbar)(({ theme }) => ({
  backgroundColor: "#fff",
  overflow: "hidden",
  width: "90%"
}));

export const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: "#000",
  backgroundColor: "transparent",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "underline",
  },
}));
