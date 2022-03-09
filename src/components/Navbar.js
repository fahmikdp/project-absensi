import React from "react";
import { AppBar, IconButton, Typography, Box } from "@mui/material";
import { ArrowBackTwoTone } from "@mui/icons-material";

export default function Navbar(props) {
  return (
    <AppBar
      elevation="none"
      position="fixed"
      sx={{ xs: 12, bgcolor: "#249EA0", pt: 1 }}
    >
      <Box>{props.children}</Box>
    </AppBar>
  );
}
