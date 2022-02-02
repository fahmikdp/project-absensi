import React from "react";
import { AppBar, IconButton, Typography, Box } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";

export default function Navbar() {
  return (
    <AppBar elevation="" position="static" sx={{ xs: 12, bgcolor: "#fff" }}>
      <Box sx={{ flexGrow: 2 }}>
        <IconButton>
          <ChevronLeft />
          <Typography>Form Absensi</Typography>
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 10 }}></Box>
    </AppBar>
  );
}
