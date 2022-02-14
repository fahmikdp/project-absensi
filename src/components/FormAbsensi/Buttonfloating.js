import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const SaveButton = styled(Button)({
  transition: " 1ms smooth",
  marginTop: 0,
  marginBottom: 15,
  boxShadow: "none",
  textTransform: "none",
  fontSize: 15,
  letterSpacing: "1px",
  width: "95%",
  padding: "8px 70px",
  lineHeight: 1.5,
  backgroundColor: "#249EA0",
  fontFamily: [
    "Roboto",
    "poppins",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(","),
  "&:hover": {
    backgroundColor: "#25B8BB",
    padding: "9px 71px",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#249EA0",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function FloatingActionButtons() {
  return (
    <Box sx={{ mt: 8 }}>
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          bgcolor: "transparent",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            margin: "auto",
            textAlign: "center",
            width: "95%",
          }}
        >
          <SaveButton variant="contained" disableRipple>
            Simpan
          </SaveButton>
        </Box>
      </AppBar>
    </Box>
  );
}
