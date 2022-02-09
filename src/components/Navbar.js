import React from "react";
import { AppBar, IconButton, Typography, Box } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <AppBar
        elevation="none"
        position="fixed"
        sx={{ xs: 12, bgcolor: "#249EA0", pt: 1 }}
      >
        <Box>
          <IconButton sx={{ color: "#fff" }}>
            <ChevronLeft />
            <Typography sx={{ fontFamily: "Roboto", fontWeight: 700 }}>
              Form Absensi
            </Typography>
          </IconButton>
        </Box>
      </AppBar>
      <Search />
    </>
  );
}
